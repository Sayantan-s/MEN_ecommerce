const Product = require("../model/product");

exports.getAdminProducts = ((req,res) => {
    res
    .status(200)
    .render('admin/edit-product',{
        title : 'Admin | product',
        path :  req._parsedOriginalUrl.path,
        edit : false
    })
})

exports.getEditProducts = ((req,res) => {
    const editMode = req.query.edit
    const id = req.params.productID
    if(!editMode){
        return res.redirect('/');
    }
    Product.findProductByID(id,data => {
        res
        .status(200)
        .render('admin/edit-product',{
            title : 'Admin | UpdateProduct',
            path :  '/admin/edit-product',
            edit : editMode,
            data
        })
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