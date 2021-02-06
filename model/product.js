let products = [];

const { v4 : { uuidv4 } } = require('uuid');

module.exports = class Product {
    constructor(name,price,img,desc){
        this.name = name,
        this.price = price;
        this.image = img;
        this.des = desc;
        this.id = ~~(Math.random()*2000);
    }

    save(){
        products.push(this);
        console.log(this);
    }
    static fetchproducts(){
        return products;
    }
}