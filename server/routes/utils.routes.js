import { PrismaClient } from '@prisma/client';
import express from 'express';
import AuthUtils from '../helpers/auth_helper';
import CustomError from '../helpers/custom_error_handler';

const router  = express.Router();

const { reftoken, users } = new PrismaClient();

router.get('/csrf', (req,res) => {
    return res.json({  csrf :  req.csrfToken() });
})

router.get('/refresh', async(req, res) => {
    try {
        const { token } = req.cookies;

        if(!token) return next(CustomError.newError(401, 'You are not authorized!'));

        const userFromToken =  await reftoken.findFirst({
            where : { token : token },
            select : {
                user_id : true
            }
        })

        if(!userFromToken) return next(CustomError.newError(401, 'You are not authorized!'));

        const user = await users.findUnique({
            where : { id : userFromToken.user_id }
        })

        if(!user) return next(CustomError.newError(401, 'You are not authorized!'));

        const accessToken = await AuthUtils.generate_JWT({ 
            payload : {
                _id: user._id,
                username: user.username,
                role: 'user'
            }
         })

        res.send({ token : accessToken });

    } catch (error) {
        console.log(error);
    }
})

export default router;