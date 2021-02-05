let products = [];

module.exports = class Product {
    constructor(name,price,img,desc){
        this.name = name,
        this.price = price;
        this.image = img;
        this.des = desc;
    }

    save(){
        products.push(this);
        console.log(this);
    }
    static fetchproducts(){
        return products;
    }
}