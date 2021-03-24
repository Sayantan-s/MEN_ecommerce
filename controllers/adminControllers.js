const { ObjectID } = require("bson");
const ProductModel = require("../mongoose/models/product.model");

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
    return Product.findProductByID(id,data => {
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
    console.log(req.body);
    const updatedProduct = new Product(item,price,img,desc,new ObjectID(productID),req.user);
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
    return ProductModel
    .find()
    .then(products => {
        return res
        .status(200)
        .render('admin/show-product',{
            title : 'Admin | product',
            path :  req._parsedOriginalUrl.path,
            itemData : products
        })
    })
    .catch(err => console.log(err));
})



exports.postAdminProducts = ((req,res) => {
    const Product = new ProductModel({...req.body})
    return Product
    .save()
    .then(_ => {
        console.log("product is saved to db")
        return  res.redirect('/admin/show-product'); 
    })
    .catch(err => console.log(err));
})