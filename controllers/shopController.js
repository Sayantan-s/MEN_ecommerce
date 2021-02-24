const Cart = require("../model/cart");
const Product = require("../model/product");
const ProductModel = require("../sql/models/product.model");

exports.getHome = ((req,res) => {
    ProductModel
    .findAll()
    .then(products => {
        res
        .status(200)
        .render('shop/index',{
            title : 'Home',
            path: req._parsedOriginalUrl.path,
            itemData : products
        })
    })
    .catch(err => console.log(err))
})



exports.getShopProducts = ((req,res) => {
   ProductModel
   .findAll()
   .then(products => {
        res
        .status(200)
        .render('shop/show-product',{
            title : 'Products',
            path: req._parsedOriginalUrl.path,
            itemData : products
        })
   })
   .catch(err => console.log(err))
})

exports.getProductByID = ((req,res,next) => {
    const { id } = req.params;
    ProductModel
    .findAll({
        where : {
            id : id
        }
    })
    .then(product => {
        res
        .status(200)
        .render('shop/product/each',{
            title : `Product | ${id}`,
            path : '/products',
            pageID : id,
            item : product[0]
        })
    })
    .catch(err => console.log(err))
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

exports.postProductInCart = (req,res) => {
    const { productID } = req.body;
    Product.findProductByID(productID,product => {
        Cart.addToCart(productID,product.price)
    })
    res.redirect('/cart');
} 