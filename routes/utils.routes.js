const { PrismaClient } = require('@prisma/client');
const router = require('express').Router();
const AuthUtils = require('../helpers/auth_helper');
const CustomError = require('../helpers/custom_error_handler');

const { reftoken, users } = new PrismaClient();

router.get('/csrf', (req, res) => {
    return res.json({ csrf: req.csrfToken() });
});

router.get('/refresh', async (req, res, next) => {
    try {
        const { token } = req.cookies;

        console.log(token);

        if (!token) return next(CustomError.newError(401, 'You are not authorized!'));

        const userFromToken = await reftoken.findFirst({
            where: { token: token },
            select: {
                user_id: true
            }
        }); 

        if (!userFromToken) return next(CustomError.newError(401, 'You are not authorized!'));

        const user = await users.findUnique({
            where: { id: userFromToken.user_id }
        });

        if (!user) return next(CustomError.newError(401, 'You are not authorized!'));

        const accessToken = await AuthUtils.generate_JWT({
            payload: {
                _id: user._id,
                username: user.username,
                role: 'user'
            }
        });

        res.header('X-Access-Token', accessToken)

        res.send({ token: accessToken });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
