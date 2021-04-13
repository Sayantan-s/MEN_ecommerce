const bcrypt = require('bcryptjs');
const User = require("../mongoose/models/user.model");

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
        title : 'Signup',
        path: '/reset password',
        error : errorMessage.length > 0 ? errorMessage[0] : null
    })
}