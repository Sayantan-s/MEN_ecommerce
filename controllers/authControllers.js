const bcrypt = require('bcryptjs');
const User = require("../mongoose/models/user.model");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sgTransporter = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(sgTransporter({
    auth : {
        api_key : process.env.SENDGRID_API_KEY
    }
}))

exports.getLogin = (req,res) => {
    const errorMessage = req.flash('error');
    res
    .render('auth/login',{
        title : 'Login',
        path: req._parsedOriginalUrl.path,
        isAuth : false,
        error : errorMessage.length > 0 ? errorMessage[0] : null
    })
}

exports.postLogin = (req,res) => {
    const { email,password } = req.body;
    if(email.trim() !== ''){ 
       return User.findOne({ email })
       .then(user => {
            if(!user) {
                req.flash('error', 'Invalid email!');
                return res.status(404).json({status : 'Invalid Email!'});
            }
            bcrypt
            .compare(password,user.password)
            .then(matched => {
                if(!matched) {
                    req.flash('error', 'Invalid password!');
                    return res.status(404).json({status : 'Invalid Password!'});
                }
                req.session.isLoggedIn = true;
                req.session.user = user;
                req.session.save(_ => {
                    return res.json({
                        status : 'Authentication successfull'
                    })
                })
            })
            .catch(err => {
                if(err){
                    req.flash('error', 'Invalid user!');
                    return res.status(404).json({status : 'Invalid Password!'});
                }
            })
       })
       .catch(err => console.log(err));
    }
    res.json({ status : 'Invalid Email!' })
}

exports.postLogout = (req,res) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
}


exports.getSignUp = (req,res) => {
    return res
    .status(200)
    .render('auth/signup',{
        title : 'Signup',
        path: req._parsedOriginalUrl.path,
        isAuth : false,
        //csrfToken : req.csrfToken()
    })
}

exports.postSignUp = (req,res) => {
    const { name,email,password } = req.body;
    User.findOne({ email })
    .then(user => {
        if(user) return res.redirect('/signup');
        return bcrypt.hash(password,12)
        .then(hashedPassword => {
            const newUser = new User({
                fullName: name,
                email,
                password : hashedPassword,
                cart : { items : [] }
            })
            return newUser.save()
        }).catch(err => console.log(err));
    })
    .then(user => {
        if(!user) return res.redirect('/signup');
        req.session.user = user
        req.session.isLoggedIn = true;
        req.session.save(_ => { 
            res.redirect('/');
        })
    })
    .catch(err => console.log(err));
}

exports.getResetPass = (req,res) => {
    const errorMessage = req.flash('error');
    res.render('auth/reset',{
        title : 'Reset password',
        path: '/reset password',
        error : errorMessage.length > 0 ? errorMessage[0] : null
    })
}

exports.postResetPass = (req,res) => {
    const { email } = req.body
    crypto.randomBytes(32,(err,buffer) => {
        if(err) {
            console.log(err);
            return res.redirect('/reset');
        }
        const token = buffer.toString('hex');
        User.findOne({
            email
        },(err,user) => {
            if(err) {
                console.log(err);
                res.redirect('/reset');
            }
            user.resetToken = token;
            user.resetTokenExpiration = Date.now() + (3 * 60 * 60 * 1000)
            return user.save();
        })    
        .then(_ => {
            res.redirect('/');
            transporter.sendMail({
                to: email,
                from : 'sayantans.it2018@nsec.ac.in',
                subject: 'Password reset',
                html : `<div>
                      <h1>You requested a password reset</h1>
                      <p>Click the <a href="http://localhost:4000/reset/${token}"> link </a> for a new password</p>  
                    <div>`
            })
        })
        .catch(err => console.log(err));
    })
}

exports.getPassReset = (req,res) => {
    const errorMessage = req.flash('error');
    const { token } = req.params;

    User.findOne({
        resetToken : token,
        resetTokenExpiration : { $gt: Date.now() }
    },(err,user) => {
        if(err) return res.redirect(req._parsedOriginalUrl.path)
        console.log(user);
        return res
        .status(200)
        .render('auth/passreset',{
            title : 'Reset password',
            path: '/new-password',
            error : errorMessage.length > 0 ? errorMessage[0] : null,
            userId : user._id.toString(),
            passwordToken : token
        })
    })
}

exports.postNewPassword = (req,res) => {
    let resetUser;
    const { userId,  passwordToken, password  } = req.body
    User.findOne({
        resetToken : passwordToken,
        resetTokenExpiration : { $gt : Date.now() }, 
        _id : userId
    }).then(user => {
        console.log(user);
        resetUser = user;
        return bcrypt.hash(password,12)
    })
    .then(hashPass => {
        console.log(hashPass);
        resetUser.password = hashPass;
        resetUser.resetToken = undefined;
        resetUser.resetTokenExpiration = undefined;
        return resetUser.save();
    })
    .then(result => {
        console.log(result);
        return res.redirect('/login');
    })
    .catch(err => console.log(err));
}