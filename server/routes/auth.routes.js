import AuthUtils from '../helpers/auth_helper';
import CustomError from '../helpers/custom_error_handler';
import User from '../models/User.model';
import { login_validator, register_validator } from '../validators/auth.validator';

const router = require('express').Router();

router.route('/register').post(async (req, res, next) => {
    try {
        const { error, password, fullname, username, email } =
            await register_validator.validateAsync(req.body);

        if (error) return next(error);

        const hashedPassword = await AuthUtils.hashPassword(password);

        const userExists = await User.exists({ email });

        if (userExists) return next(CustomError.alreadyExists('You already have an account!'));

        const user = await new User(fullname, username, email, hashedPassword).save();

        const accessToken = await AuthUtils.generate_JWT({
            payload: {
                _id: user._id,
                username: user.username
            }
        });

        res.send({ accessToken });
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

        const user = await User.findOne({ email }, 'email password username _id');

        console.log(user)

        if(!(!!user)){
            return next(CustomError.newError(401, 'Invalid email/password!'))
        }

        const isPasswordValid = await AuthUtils.verifyPassword(password, user.password);

        if(!isPasswordValid){
            return next(CustomError.newError(401, 'Invalid email/password!'));
        }

        const accessToken = await AuthUtils.generate_JWT({
            payload: {
                _id: user._id,
                username: user.username
            }
        });

        res.send({ accessToken });

    } catch (error) {
        next(error);
    }
});

router.route('/logout').delete(async (req, res, next) => {
    res.send({ message: 'Hello from logout' });
});

router.route('/refresh').post(async (req, res, next) => {
    res.send({ message: 'Hello from refresh!' });
});

export default router;
