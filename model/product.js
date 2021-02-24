//let products = [];
//const { v4 : { uuidv4 } } = require('uuid');


const path = require('path')
const fs  = require('fs');
const Cart = require('./cart');
const ProductModel = require('../sql/models/product.model');

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
        this.id = id;
    }

    save(){
       /*const insertQuery = `INSERT INTO products (title,price,description,img) VALUES (?,?,?,?)`;
       return db.execute(insertQuery,[this.name,this.price,this.des,this.image]);*/
    }

    static fetchproducts(){
      /*getproductsfromFile(callback);
      const fetchQuery = `SELECT * FROM products`
      return db.execute(fetchQuery);*/
    
    }

    static findProductByID(id){
       /*getproductsfromFile(products => {
            const product = products.find(prod => prod.id.toString() === id);
            console.log(product)
            callback(product); 
        })*/
        /*const queryByID = `SELECT * FROM products WHERE products.id = ?`
        return db.execute(queryByID,[id])*/
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