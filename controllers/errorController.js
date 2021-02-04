exports.error = ((req,res) => {
    console.log(req);
    res
    .status(404)
    .render('404',{
        title : 404,
        path : 'error'
    })
})