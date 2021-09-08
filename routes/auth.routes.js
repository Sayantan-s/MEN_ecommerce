const AuthUtils = require('../helpers/auth_helper');
const CustomError = require('../helpers/custom_error_handler');
const { login_validator, register_validator } = require('../validators/auth.validator');
const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const client = require("../helpers/init_redis");
const { COOKIE_EXPIRATION } = require("../config");
const isAuth = require('../middlewares/isAuth');
 
const { users } = new PrismaClient();

router.route('/register').post(async (req, res, next) => {
    try {
        const { error, password, fullname, username, email } =
            await register_validator.validateAsync(req.body);

        if (error) return next(error);

        const userExists = await users.findUnique({
            where: { email }
        });

        if (userExists) return next(CustomError.alreadyExists('Email already in use!'));

        const hashedPassword = await AuthUtils.hashPassword(password);

        const user = await users.create({
            data: {
                fullname,
                username,
                email,
                password: hashedPassword
            }
        });

        if (!user) return next(CustomError.newError(400, 'Failed to register! Try again'));

        const userMetaData = {
            _id: user.id,
            username: user.username,
            role: 'user'
        }

        const { accessToken, refreshToken } = await AuthUtils.createTokens({ payload: userMetaData });

        client.setex(
            refreshToken, 
            COOKIE_EXPIRATION, 
            user.id, 
            (err, reply) => {
                if(err) return next(CustomError.newError(500, `Something went wrong!`))
                res.cookie('x-refresh', refreshToken, {
                    httpOnly: true,
                    maxAge : COOKIE_EXPIRATION
                });

                res.header('x-access-token', accessToken);

                res.status(201).send({ message : "Your account has been created!"});
            }
        );

    } catch (error) {
        next(error);
    } 
});

router.route('/login').post(async (req, res, next) => {
    try {
        const { error, email, password } = await login_validator.validateAsync(req.body);

        if (error) {
            return next(error);
        }

        const user = await users.findFirst({
            where: { email },
            select: {
                username: true,
                password: true,
                id: true
            }
        });

        if (!!!user) {
            return next(CustomError.newError(401, 'Invalid email/password!'));
        }

        const isPasswordValid = await AuthUtils.verifyPassword(password, user.password);

        if (!isPasswordValid) {
            return next(CustomError.newError(401, 'Invalid email/password!'));
        }

        const { accessToken, refreshToken } = await AuthUtils.createTokens({
            payload: {
                _id: user.id,
                username: user.username,
                role: 'user'
            }
        });

        res.cookie('x-refresh', refreshToken, {
            httpOnly: true,
            maxAge : COOKIE_EXPIRATION
        });

        res.header('x-access-token', accessToken);

        res.status(200).send({ message : "You are successfully logged in!" });
    } catch (error) {
        next(error);
    }
});

router
.route('/logout')
.delete(isAuth, async (req, res, next) => {
    try{
        const { id } = req.user;
        const { ['x-refresh'] : token } = req.cookies
        if (!token) {
            const error = CustomError.newError(401, 'User not authorized!');
            return next(error);
        }
        const doesUserExists = await users.findUnique({
            where : { id }
        })
        if(doesUserExists){
            client.del(token,(err,result) => {
                if(err) return next(CustomError.newError(409, 'Something went wrong!'));
                console.log(result);
                res.clearCookie('x-refresh')
                res.send({ message: 'You have been logged out!' });
            })
        }
    } catch (error){
        next(error);
    }
});

module.exports = router;
