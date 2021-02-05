const Product = require("../model/product");

exports.getHome = ((req,res) => {
    console.log(Product.fetchproducts());
    res
    .status(200)
    .render('shop/index',{
        title : 'Home',
        path: req._parsedOriginalUrl.path,
        itemData : Product.fetchproducts()
    })
})