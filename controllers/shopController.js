const Product = require("../mongoose/models/product.model");

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
        itemData : products
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
           itemData : products
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
            item
        })
    }).catch(err => console.log(err))
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
    req.user
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
                cart : finalCartproducts
            })  
        })
        .catch(err =>console.log(err))
    })
})

exports.deleteProductFromCart = (req,res) => {
    const { id } = req.body;
    req.user.deleteFromCart(id);
    return res.redirect('/cart')
}
    

exports.postProductInCart = (req,res) => {
    const { productID } = req.body;
    return Product.findById(productID)
    .then(product => {
        req.user.addToCart(product);
        return res.redirect('/products');
    }).catch(err => console.log(err))
}
