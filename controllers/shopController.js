const Order = require("../mongoose/models/order.model");
const Product = require("../mongoose/models/product.model");
//const User = require("../mongoose/models/user.model");

exports.getHome = ((req,res) => {
   Product
   .find()
   .select('name tagname price image')
   .then(products => {
    return res
    .status(200)
    .render('shop/index',{
        title : 'Home',
        path: req._parsedOriginalUrl.path,
        itemData : products,
        isAuth : req.session.isLoggedIn
    })
   }).catch(err => console.log(err))
})

exports.getShopProducts = ((req,res) => {
   Product
   .find()
   .select('name tagname image price')
   .then(products => {
       return  res
       .status(200)
       .render('shop/show-product',{
           title : 'Products',
           path: req._parsedOriginalUrl.path,
           itemData : products,
           isAuth : req.session.isLoggedIn
       })
   }).catch(err => console.log(err))
})

exports.getProductByID = ((req,res) => {
    const { id } = req.params;
    Product
    .findById(id)
    .then(item => {
        return  res
        .status(200)
        .render('dynamic/[product]',{
            title : `Product | ${id}`,
            path : '/products',
            pageID : id,
            item,
            isAuth : req.session.isLoggedIn
        })
    }).catch(err => console.log(err))
})

exports.getOrders = ((req,res) => {
    return Order.find({'user.userId' : req.session.user._id})
    .then(orders => {
        res
        .status(200)
        .render('shop/order',{
            title : 'Your orders',
            path: req._parsedOriginalUrl.path,
            orders: orders,
            isAuth : req.session.isLoggedIn        })
    })
    .catch(err => console.log(err));
})

exports.postOrders = (req,res) => {
    req.session.user
    .populate('cart.items')
    .execPopulate()
    .then(result => {  
        const { fullName,_id } = req.session.user
        const prodIDs = result.cart.items.map(i => i.productID)
        Product
        .find({
            _id : { $in : prodIDs }
        })
        .select('image name tagname price')
        .then(prs => {
            const newProducts = prs.map(prod => ({
                product : {...prod._doc},
                quantity : result.cart.items.find(p => p.productID.toString() === prod._id.toString()).quantity
            })) 
            const order = new Order({
                user : {
                    name : fullName,
                    userId : _id
                },
               products : newProducts
            })
            return order.save()
        })
        .then(_ => req.session.user.clearCart())
        .catch(err => console.log(err))
    }).then(_ => {
        return  res
        .status(200)
        .json({
            statusText : `item is ordered!`     
        })
    }).catch(err => console.log(err))  
}

exports.getShopCart = ((req,res) => {
    req.session.user
    .populate('cart.items')
    .execPopulate()
    .then(products => {
        const productIDs = products.cart.items.map(prod => prod.productID);
        Product
        .find({
            _id : { $in : productIDs }
        })
        .select('name tagname image price gender')
        .then(productsArray => {
            const finalCartproducts = productsArray.map(items => (
                {
                    ...items._doc,
                    quantity: products.cart.items.find(item => item.productID.toString() === items._id.toString()).quantity
                }
            ))
            return res
            .status(200)
            .render('shop/cart',{
                title : 'Your Cart',
                path: req._parsedOriginalUrl.path,
                cart : finalCartproducts,
                isAuth : req.session.isLoggedIn
            })  
        })
        .catch(err =>console.log(err))
    })
})

exports.deleteProductFromCart = (req,res) => {
    const { id } = req.body;
    req.session.user.deleteFromCart(id);
    return res.redirect('/cart')
}
    

exports.postProductInCart = (req,res) => {
    const { productID } = req.body;
    return Product.findById(productID)
    .then(product => {
        req.session.user.addToCart(product);
        return res.redirect('/products');
    }).catch(err => console.log(err))
}
