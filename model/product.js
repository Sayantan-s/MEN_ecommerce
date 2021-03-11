//let products = [];
//const { v4 : { uuidv4 } } = require('uuid');


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
    constructor(name,price,img,desc){
        this.name = name,
        this.price = price;
        this.image = img;
        this.des = desc;
    }

    save(){
        /*getproductsfromFile(products => {
            if(this.id){
                const existingProductIndex = products.findIndex(prod => prod.id == this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(file,JSON.stringify(updatedProducts),err => {
                    if(!err){
                        console.log("No error in updating!");
                    }
                    else console.log(err);
                })
            }
            else{
                this.id = ~~(Math.random()*2000);
                products.push(this);
                console.log(products);
                fs.writeFile(file,JSON.stringify(products),err => {
                    console.log(err);
                })
            }
        })*/
        return getDb()
        .collection('product')
        .insertOne(this)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    static fetchproducts(callback){
      return getDb()
      .collection('product')
      .find()
      .toArray()
      .then(product => 
        {
            return callback(product);
        })
        .catch(err =>console.log(err));
    }

    static findProductByID(id,callback){
        /*getproductsfromFile(products => {
            const product = products.find(prod => prod.id.toString() === id);
            console.log(product)
            callback(product); 
        })*/
        //CHECK FINDONE ERROR TOMMOROW
        return getDb()
        .collection('product')
        .findOne({ _id : new ObjectID(id) },(err,product) => {
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