exports.getHome = ((req,res) => {
    res
    .status(200)
    .render('index',{
        title : 'Home',
        path: req._parsedOriginalUrl.path
    })
})