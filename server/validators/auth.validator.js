import joi from 'joi'

const register_validator = joi.object({
    img : joi.string(),
    fullName : joi.string().required(),
    username : joi.string().required().min(8).max(20).error(err => {
        err.forEach(error => {
            switch(error.code){
                case 'any.empty':
                    error.message = `Please don't leave it empty`;
                    break;
                case "string.min":
                    error.message = `Value should have at least ${error.local.limit} characters!`;
                    break;
                case "string.max":
                    error.message = `Value should have at most ${error.local.limit} characters!`;
                    break;
                default:
                    break;
            }
        })
    }),
    email : joi.string().required(),
    password : joi.string().required(),
    confirmpassword : joi.ref('password')
})

export { register_validator }