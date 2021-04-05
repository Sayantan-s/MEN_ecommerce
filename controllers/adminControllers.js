const ProductModel = require("../mongoose/models/product.model");

exports.getAdminProducts = ((req,res) => {
    res
    .status(200)
    .render('admin/edit-product',{
        title : 'Admin | product',
        path :  req._parsedOriginalUrl.path,
        edit : false,
        isAuth : req.session.isLoggedIn
    })  
})

exports.getEditProducts = ((req,res) => {
    const editMode = req.query.edit
    const id = req.params.productID
    if(!editMode){
        return res.redirect('/');
    }
    return ProductModel
    .findById(id)
    .then(data => {
        return res
        .status(200)
        .render('admin/edit-product',{
            title : 'Admin | UpdateProduct',
            path :  '/admin/edit-product',
            edit : editMode,
            isAuth : req.session.isLoggedIn,
            data
        })
    })
})

exports.postEditProducts = (req,res) => {
    const { productID,...otherProductSchema } = req.body;
    return ProductModel
    .findOneAndUpdate({
        _id : productID
    },{...otherProductSchema},err => {
        if(err) console.log(err);
        else{
            console.log(`Product ${productID} is updated!`);
            return res.redirect('/admin/show-product')
        }
    })
}

exports.postDeleteProducts = (req,res) => {
    const { productID } = req.body;
    ProductModel
    .findByIdAndRemove(productID)
    .then(_ => {
        console.log(`${productID} product deleted`)
        return res.redirect('/admin/show-product');
    }).catch(err => console.log(err))
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
            itemData : products,
            isAuth : req.session.isLoggedIn
        })
    })
    .catch(err => console.log(err));
})

 

exports.postAdminProducts = ((req,res) => {
    const Product = new ProductModel({...req.body,userId : req.user}) //Mongoose will take only req.user._id from req.user
    return Product
    .save()
    .then(_ => {
        console.log("product is saved to db")
        return  res.redirect('/admin/show-product'); 
    })
    .catch(err => console.log(err));
})