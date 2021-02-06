const Product = require("../model/product");

exports.getHome = ((req,res) => {
    res
    .status(200)
    .render('shop/index',{
        title : 'Home',
        path: req._parsedOriginalUrl.path,
        itemData : Product.fetchproducts()
    })
})



exports.getShopProducts = ((req,res) => {
    res
    .status(200)
    .render('shop/show-product',{
        title : 'Products',
        path: req._parsedOriginalUrl.path,
        itemData : Product.fetchproducts()
    })
})

exports.getProductByID = ((req,res,next) => {
    console.log(req.params.id);
    res
    .status(200)
    .render('shop/product/each',{
        title : 'IDproduct',
        path : req._parsedOriginalUrl.path,
        pageID : req.params.id
    })
})

exports.getOrders = ((req,res) => {
    res
    .status(200)
    .render('shop/order',{
        title : 'Your orders',
        path: req._parsedOriginalUrl.path,
    })
})

exports.getShopCart = ((req,res) => {
    res
    .status(200)
    .render('shop/cart',{
        title : 'Your Cart',
        path: req._parsedOriginalUrl.path,
    })
})