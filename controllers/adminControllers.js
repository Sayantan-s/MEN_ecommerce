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

exports.postEditProducts = (req,res) => {
    const { item,price,img,desc,productID } = req.body;
    const updatedProduct = new Product(item,price,img,desc,productID);
    updatedProduct.save();
    res.redirect('/admin/show-product');
}

exports.postDeleteProducts = (req,res) => {
    const { productID } = req.body;
    console.log(req.body);
    Product.delete(productID);
    res.redirect('/admin/show-product');
}

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
    const productItem = new Product(item,price,img,desc,null);
    productItem.save();
    res.redirect('/admin/show-product'); 
})