const Product = require("../model/product");

exports.getHome = ((req,res) => {
    Product.fetchproducts(product => {
        res
        .status(200)
        .render('shop/index',{
            title : 'Home',
            path: req._parsedOriginalUrl.path,
            itemData : product
        })
    })
})

exports.getShopProducts = ((req,res) => {
    Product.fetchproducts(product => {
        res
        .status(200)
        .render('shop/show-product',{
            title : 'Products',
            path: req._parsedOriginalUrl.path,
            itemData : product
        })
    })
})

exports.getProductByID = ((req,res) => {
    const id = req.params.id;
    Product.findProductByID(id,item => {
        res
        .status(200)
        .render('dynamic/[product]',{
            title : `Product | ${id}`,
            path : '/products',
            pageID : id,
            item
        })
    })
})

exports.getOrders = ((req,res) => {
    req.user.getUserOrders(orders => {
        console.log(orders)
        return  res
        .status(200)
        .render('shop/order',{
            title : 'Your orders',
            path: req._parsedOriginalUrl.path,
            orders
        })
    })
})

exports.postOrders = (req,res) => {
    req.user.addOrder(person => {
        return  res
        .status(200)
        .json({
            statusText : `${person}'s item is ordered!`
        })
    })
  
}

exports.getShopCart = ((req,res) => {
    req.user.getCart(products => {
        return res
        .status(200)
        .render('shop/cart',{
            title : 'Your Cart',
            path: req._parsedOriginalUrl.path,
            cart : products
        })  
    })
})

exports.deleteProductFromCart = (req,res) => {
    const { id } = req.body;
    req.user.deleteFromCart(id);
    return res.redirect('/cart')
}

exports.postProductInCart = (req,res) => {
    const { productID } = req.body;
    Product.findProductByID(productID,product => {
        req.user.addToCart(product)
        .then(_ => "ITEM is deleted")
        .catch(err => console.log(err));
        return res
        .status(200)
        .redirect('/cart');
    })
}  