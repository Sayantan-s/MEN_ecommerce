exports.getLogin = (req,res) => {
    res
    .render('auth/login',{
        title : 'Login',
        path: req._parsedOriginalUrl.path,
        isAuthenticated: true 
    })
}

exports.postLogin = (req,res) => {
    const { email } = req.body;
    if(email.trim() !== ''){
        //res.setHeader('Set-Cookie','isAuthenticated=true')
        req.session.isLoggedIn = true;
        return res.json({
            status : 'Authentication successfull'
        })
    }
    return res.json({ status : 'Invalid Email!' })
}