const User = require("../mongoose/models/user.model");

exports.getLogin = (req,res) => {
    console.log(req.session);
    res
    .render('auth/login',{
        title : 'Login',
        path: req._parsedOriginalUrl.path,
        isAuth : req.session.isLoggedIn
    })
}

exports.postLogin = (req,res) => {
    const { email } = req.body;
    if(email.trim() !== ''){
       User.findById('6061f4b4bc69ff8a7d35cec7')
       .then(user => {
            return res.json({
                status : 'Authentication successfull'
            })
       })
       .catch(err => console.log(err));
    }
    return res.json({ status : 'Invalid Email!' })
}

exports.postLogout = (req,res) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
}
