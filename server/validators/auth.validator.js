import Joi from 'joi';

const signUpValidaton = Joi.object({
    fullname: Joi.string().required(),

    username: Joi.string().required().min(6).max(20),

    email: Joi.string().email().required(),

    password: Joi.string().required().min(7).max(15),

    confirmpassword: Joi.ref('password')
});

const loginValidaton = Joi.object({
    username: Joi.string().alphanum().required().min(6).max(20),

    email: Joi.string().email().required(),

    password: Joi.string().required().min(7).max(15)
});

export { signUpValidaton, loginValidaton };
