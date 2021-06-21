import AuthUtils from '../helpers/auth_helper';
import CustomError from '../helpers/custom_error_handler';
import User from '../models/User.model';
import { register_validator } from '../validators/auth.validator';

const router = require('express').Router();

router.route('/register').post(async (req, res, next) => {
    try {
        const { error, password, fullname, username, email } = await register_validator.validateAsync(req.body);
        if (error) {
            next(error);
        }

        const hashedPassword = await AuthUtils.hashPassword(password);
        
        const userExists = await User.exists({ email });

        if(userExists)
            return next(CustomError.newError(401, 'You already have an account!'));

        console.log(userExists);

        res.send({ message: 'Hello from register!' });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.route('/login').post(async (req, res, next) => {
    res.send({ message: 'Hello from login!' });
});

router.route('/logout').delete(async (req, res, next) => {
    res.send({ message: 'Hello from logout' });
});

router.route('/refresh').post(async (req, res, next) => {
    res.send({ message: 'Hello from refresh!' });
});

export default router;
