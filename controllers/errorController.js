exports.error = ((req,res) => {
    res
    .status(404)
    .render('404',{
        title : 404,
        path : 'error'
    })
})