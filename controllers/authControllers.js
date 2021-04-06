const bcrypt = require('bcryptjs');

const User = require("../mongoose/models/user.model");

exports.getLogin = (req,res) => {
    console.log(req.session);
    res
    .render('auth/login',{
        title : 'Login',
        path: req._parsedOriginalUrl.path,
        isAuth : false
    })
}

exports.postLogin = (req,res) => {
    const { email,password } = req.body;
    if(email.trim() !== ''){
       return User.findOne({  email })
       .then(user => {
            if(!user) return res.redirect('/login');
            bcrypt
            .compare(password,user.password)
            .then(matched => {
                if(!matched) return res.status(404).json({status : 'Invalid Password!'});
                req.session.isLoggedIn = true;
                req.session.user = user;
                req.session.save(_ => {
                    return res.json({
                        status : 'Authentication successfull'
                    })
                })
            })
            .catch(err => {
                if(err) return res.redirect('/login');
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
        isAuth : false
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
        req.session.user = user
        req.session.isLoggedIn = true;
        req.session.save(_ => { 
            res.redirect('/');
        })
    })
    .catch(err => console.log(err));
}