import { register_validator } from '../validators/auth.validator';

const router = require('express').Router();

router.route('/register').post(async (req, res, next) => {
    try {
        const { error, ...data } = await register_validator.validateAsync(req.body);
        console.log(data);
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
