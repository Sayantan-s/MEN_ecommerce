import AuthUtils from '../helpers/auth_helper';
import CustomError from '../helpers/custom_error_handler';
import { login_validator, register_validator } from '../validators/auth.validator';
import { PrismaClient } from '@prisma/client';

const router = require('express').Router();

const { users, reftoken } = new PrismaClient();

router.route('/register').post(async (req, res, next) => {
    try {
        const { error, password, fullname, username, email } =
            await register_validator.validateAsync(req.body);

        if (error) return next(error);

        const hashedPassword = await AuthUtils.hashPassword(password);

        const userExists = await users.findUnique({
           where : { email }
        })

        if (userExists) return next(CustomError.alreadyExists('Email already in use!'));

        const user = await users.create({
            data: {
                fullname,
                username,
                email,
                password: hashedPassword
            }
        });

        if (!user) return next(CustomError.newError(400, 'Failed to register! Try again'));

        const { accessToken } = await AuthUtils.createTokens({
            payload: {
                _id: user.id,
                username: user.username,
                role: 'user'
            }
        });

        const storeRefreshToken = await reftoken.create({
            data: {
                token: AuthUtils.generate_refreshToken(),
                user_id: user.id
            }
        });

        const { exp } = await AuthUtils.verify_JWT({ token: accessToken });

        res.cookie('refresh-token', storeRefreshToken.token, {
            httpOnly: true
        });

        return res.status(201).send({ accessToken, expiry: exp, user : user.id });
    } catch (error) {
        console.log(error);
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

        const { accessToken } = await AuthUtils.createTokens({
            payload: {
                _id: user.id,
                username: user.username,
                role: 'user'
            }
        });

        const storeRefreshToken = await reftoken.create({
            data: {
                token: AuthUtils.generate_refreshToken(),
                user_id: user.id
            }
        });

        const { exp } = await AuthUtils.verify_JWT({ token: accessToken });

        res.cookie('refresh-token', storeRefreshToken.token, {
            httpOnly: true
        });

        res.status(200).send({ accessToken, expiry: exp, user : user.id });
    } catch (error) {
        next(error);
    }
});

router.route('/logout').delete(async (req, res, next) => {
    res.send({ message: 'Hello from logout' });
});

export default router;
