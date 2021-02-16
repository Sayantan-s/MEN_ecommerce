const fs = require('fs');
const path = require('path');


const filePath = path.join(path.dirname(process.mainModule.filename),'db','cart.json');

module.exports = class Cart {
    static addToCart(id,productPrice){
       //console.log(this);
       let cart = { products :[], totalPrice : 0  }
       fs.readFile(filePath, (err,data) =>{
           if(!err){
            cart = JSON.parse(data)
           }
           console.log(cart)
           const existingProductIndex = cart.products.findIndex(product => product.id === id);
           const existingProduct = cart.products[existingProductIndex];
           let updatedProduct;
           if(existingProduct){
               updatedProduct = { ...existingProduct };
               updatedProduct.qty = updatedProduct.qty + 1;
               cart.products = [...cart.products];
               cart.products[existingProductIndex] = updatedProduct
           }
           else{
               updatedProduct = { id,qty : 1 };
               cart.products = [...cart.products,updatedProduct]
           }
           cart.totalPrice = cart.totalPrice + +productPrice
           fs.writeFile(filePath, JSON.stringify(cart),err => {
               if(!err){
                   console.log('Data successfully saved to cart.json.')
               }
           })
       })


    }

    static deleteProduct(id,Productprice){
        fs.readFile(filePath,(err,dataofCart) => {
            if(err){
               return;
            }
            else{
                const updatedCart = { ...JSON.parse(dataofCart) }
                const delProduct = updatedCart.products.find(prod => prod.id == id);
                if(delProduct){
                    updatedCart.products = updatedCart.products.filter(prod => prod.id != id);
                    updatedCart.totalPrice = updatedCart.totalPrice - ((delProduct.qty || 0 ) * Productprice)
                    fs.writeFile(filePath,JSON.stringify(updatedCart),err => {
                        if(!err) console.log("deleted from cart")
                        else console.log(err);
                    })
                }
            }
        })
    }

    static getProductsInCart(callback){
        fs.readFile(filePath,(err,cartData) => {
            if(err){
                return callback(null)
            }
            return callback(JSON.parse(cartData));
        })
    }
}