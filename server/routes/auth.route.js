const router = require('express').Router()
import { signUpValidaton } from '../validators/auth.validator'
import User from '../models/User.model'

router
.route('/register')
.post(async(req,res,next) => {
   try {
        const santized_data = await signUpValidaton.validateAsync(req.body);
        delete santized_data.confirmpassword;
        const { err, email, username } = santized_data;
        if(err){
            const error = new Error('Invalid username/password!');
            error.status = 422;
            return next(error)
        }
        const userIsPresent = await User.exists({ email, username })
        if(userIsPresent){
            const error = new Error('You are already registered!');
            error.status = 409;
            return next(error);
        }
        const user =  await User.create(santized_data);
        res.send({ ...user._doc });

   } catch (error) {
       next(error)
   }
})

router
.route('/login')
.post(async(req,res,next) => {
    res.send({ message : "Hello from login" })
})


router
.route('/logout')
.post(async(req,res,next) => {
    res.send({ message : "Hello from logout" })
})

export default router;