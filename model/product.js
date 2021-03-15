const path = require('path')
const fs  = require('fs');
const Cart = require('./cart');
const { getDb } = require('../db/db.connect');
const { ObjectID } = require('bson');

const file = path.join(path.dirname(process.mainModule.filename),'db','cdb.json');

const getproductsfromFile = callback => {
    fs.readFile(file,(error,data) => {
        if(error){
            console.log(error);
            return callback([]);                
        }
        return callback(JSON.parse(data));
   })
}

module.exports = class Product {
    constructor(name,price,img,desc,id){
        this.name = name,
        this.price = price;
        this.image = img;
        this.des = desc;
        this._id = id
    }

    save(){
        let dbnew;
        if(this._id){
            dbnew = getDb().collection('product').updateOne({ _id : this._id },{$set : this})
        }
        else{
            dbnew = getDb().collection('product').insertOne(this)
        }
        return dbnew.then(result => console.log(result))
        .catch(err => console.log(err))
    }

    static fetchproducts(callback){
      return getDb()
      .collection('product')
      .find()
      .toArray()
      .then(product => callback(product))
      .catch(err =>console.log(err));
    }

    static findProductByID(id,callback){
        return getDb()
        .collection('product')
        .findOne({ _id : new ObjectID(id) },(err,product) => {
            if(err) return console.log(err);
            console.log(product);
            return callback(product);
        })
    }
    static delete(id){
        getproductsfromFile(products => {
            let updatedProducts = [...products]
            const delProduct = products.find(prod => prod.id == id)
            updatedProducts = updatedProducts.filter(product => product.id != id);
            fs.writeFile(file,JSON.stringify(updatedProducts),err => {
                if (!err){
                    Cart.deleteProduct(id,delProduct.price)
                }
            })
        })
    }
}