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
    const { email } = req.body;
    if(email.trim() !== ''){
       return User.findById('6061f4b4bc69ff8a7d35cec7')
       .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            req.session.save(_ => {
                return res.json({
                    status : 'Authentication successfull'
                })
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
    const { name,email } = req.body;
    console.log(req.body);
    return User.findOne({ email })
    .then(user => {
       if(user) return res.redirect('/signup');
       const newUser = new User({
           fullName: name,
           email,
           cart : { items : [] }
       })
       newUser.save();
    })
    .then(_ => {
        req.session.isLoggedIn = true;
        req.session.save(_ => {
            res.redirect('/');
        })
    })
    .catch(err => console.log(err));
}