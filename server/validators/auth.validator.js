import joi from 'joi';

const register_validator = joi.object({
    img: joi.string(),
    fullname: joi.string().required(),
    username: joi.string().alphanum().required().min(8).max(20).messages({
        'string.base': `username should be a type of 'text'`,
        'string.empty': `username cannot be an empty field`,
        'string.min': `username should have a minimum length of {#limit}`,
        'string.max': `username should have a maximum length of {#limit}`
    }),
    email: joi.string().required().email(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmpassword: joi.ref('password')
});

const login_validator = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required()
})

export { register_validator, login_validator };
