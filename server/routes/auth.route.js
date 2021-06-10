const router = require('express').Router();
import { signUpValidaton, loginValidaton } from '../validators/auth.validator';

router.route('/register').post(async (req, res, next) => {
  res.send({ message : 'Hello from register!' })
});

router.route('/login').post(async (req, res, next) => {
    res.send({ message : 'Hello from login!' })
});

router.route('/logout').delete(async (req, res, next) => {
    res.send({ message: 'Hello from logout' });
});

router.route('/refresh').post(async (req, res, next) => {
    res.send({ message: 'Hello from logout' });
});

export default router;
