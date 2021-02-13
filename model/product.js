//let products = [];
//const { v4 : { uuidv4 } } = require('uuid');


const path = require('path')
const fs  = require('fs');

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
        this.id = ~~(Math.random()*2000);
    }

    save(){
        getproductsfromFile(products => {
            products.push(this);
            console.log(products);
            fs.writeFile(file,JSON.stringify(products),err => {
                console.log(err);
            })
        })
    }
    static fetchproducts(callback){
       getproductsfromFile(callback);
    }

    static findProductByID(id,callback){
        getproductsfromFile(products => {
            const product = products.find(prod => prod.id.toString() === id);
            console.log(product)
            callback(product); 
        })
    }
}