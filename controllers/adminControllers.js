exports.getAdminProducts = ((req,res) => {
    res
    .status(200)
    .render('admin/product',{
        title : 'Admin | product',
        path :  req._parsedOriginalUrl.path
    })
})

exports.postAdminProducts = ((req,res) => {
    console.log(req.body);
    res.redirect('/');
})