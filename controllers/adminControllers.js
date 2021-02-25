const Product = require("../model/product");
const ProductModel = require("../sql/models/product.model");

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
    ProductModel
    .findAll({
        where : {
            id : id
        }
    })
    .then(products => {
        if(!products){
            return res.redirect('/');
        }
        return  res
                .status(200)
                .render('admin/edit-product',{
                    title : 'Admin | UpdateProduct',
                    path :  '/admin/edit-product',
                    edit : editMode,
                    data : products[0]
                })
    })
    .catch(err => console.log(err))
})

exports.postEditProducts = (req,res) => {
    const { item,price,img,desc,productID } = req.body; 
    console.log(req.body);

    //const updatedProduct = new Product(item,price,img,desc,productID);
    //updatedProduct.save();
    ProductModel
    .findAll({
        where :{
            id : productID
        }
    })
    .then(products => {
        products[0].name = item
        products[0].desc = desc
        products[0].img = img
        products[0].price = price;
        return products[0].save()
    })
    .then(res => {
        console.log('Updated')
        res.redirect('/admin/show-product');
    })
    .catch(err => console.log(err))
}

exports.postDeleteProducts = (req,res) => {
    const { productID } = req.body;
   /* console.log(req.body);
    Product.delete(productID);*/
    ProductModel.destroy({
        where : {
            id : productID
        }
    })
    .then(result => {
        console.log("Deleted")
        return res.redirect('/admin/show-product');
    })
    .catch(err => console.log(err));
}

exports.getAdminShowProducts = ((req,res) => {
    ProductModel
    .findAll()
    .then(products => {
        res
        .status(200)
        .render('admin/show-product',{
            title : 'Admin | product',
            path :  req._parsedOriginalUrl.path,
            itemData : products
        })
    })
    .catch(err => console.log(err))
})



exports.postAdminProducts = ((req,res,next) => {
    const { item,price,img,desc } = req.body;
   // const productItem = new Product(item,price,img,desc,null);
    ProductModel
    .create({
        name : item,
        price : price,
        img : img,
        desc : desc
    })
    .then(result => {
        console.log("Posted")
        res.redirect('/admin/show-product')
    })
    .catch(err => console.log(err))
    /*productItem
    .save()
    .then(_ => res.redirect('/'))
    .catch(err => console.log(err));*/
})