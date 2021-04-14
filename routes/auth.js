const express = require('express');

const { getLogin, postLogin, postLogout, getSignUp, postSignUp, getResetPass,postResetPass, getPassReset, postNewPassword } = require('../controllers/authControllers')

const router = express.Router();

router.get('/login',getLogin);

router.post('/login',postLogin);

router.post('/logout',postLogout);

router.get('/signup',getSignUp);

router.post('/signup',postSignUp);

router.get('/reset',getResetPass);

router.post('/reset',postResetPass)

router.get('/reset/:token',getPassReset)

router.post('/new-password',postNewPassword);

module.exports = router 