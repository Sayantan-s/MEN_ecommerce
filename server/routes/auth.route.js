const router = require('express').Router()
import { signUpValidaton,loginValidaton } from '../validators/auth.validator'
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
        const user =  await User.create(santized_data).lean();
        res.send({ ...user._doc });

   } catch (error) {
       next(error)
   }
})

router
.route('/login')
.post(async(req,res,next) => {
   try {
        console.log(req.body);
        const santized_data = await loginValidaton.validateAsync(req.body);
        const { err, email, username } = santized_data;
        if(err){
            const error = new Error('Invalid username/password!');
            error.status = 422;
            return next(error)
        }
        const user = await User.findone({ username }).lean();
        if(!user){
            const error = new Error('You are not registered! Please login!');
            error.status = 401;
            return next(error);
        }
        res.send({ message : "Hello from login" })
   } catch (error) {
       next(error)
   }
})


router
.route('/logout')
.post(async(req,res,next) => {
    res.send({ message : "Hello from logout" })
})

export default router;