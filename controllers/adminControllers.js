const Product = require("../model/product");

exports.getAdminProducts = ((req,res) => {
    res
    .status(200)
    .render('admin/add-product',{
        title : 'Admin | product',
        path :  req._parsedOriginalUrl.path,
    })
})

exports.getAdminShowProducts = ((req,res) => {
    Product.fetchproducts(product => {
        res
        .status(200)
        .render('admin/show-product',{
            title : 'Admin | product',
            path :  req._parsedOriginalUrl.path,
            itemData : product
        })
    })
})

exports.postAdminProducts = ((req,res) => {
    const { item,price,img,desc } = req.body;
    const productItem = new Product(item,price,img,desc);
    productItem.save();
    res.redirect('/'); 
})