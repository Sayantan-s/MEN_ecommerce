import joi from 'joi';

const register_validator = joi.object({
    img: joi.string(),
    fullname: joi.string().required(),
    username: joi.string().required().min(8).max(20).messages({
        'string.base': `username should be a type of 'text'`,
        'string.empty': `username cannot be an empty field`,
        'string.min': `username should have a minimum length of {#limit}`,
        'string.max': `username should have a maximum length of {#limit}`
    }),
    email: joi.string().required(),
    password: joi.string().required(),
    confirmpassword: joi.ref('password')
});

const login_validator = joi.object({
    
})

export { register_validator };
