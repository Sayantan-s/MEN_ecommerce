const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModel = new Schema({    
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    cart : {
        items : [
            {
                productID : {
                    type : Schema.Types.ObjectId,
                    ref: 'Products',
                    required : true
                },
                quantity : {
                    type : Number,
                    required : true
                }
            }
        ]
    }
})

UserModel.methods.addToCart = function(item){
    const itemTobeUpdatedIndex = this.cart.items.findIndex(product => {
        return product.productID.toString() === item._id.toString() 
    })
    let updatedCartItems = [...this.cart.items];
    let newQuantity = 1;
    if(itemTobeUpdatedIndex >= 0){
        newQuantity = this.cart.items[itemTobeUpdatedIndex].quantity + 1;
        updatedCartItems[itemTobeUpdatedIndex].quantity = newQuantity;
    }
    else{
        updatedCartItems.push({
            productID : item._id,
            quantity : newQuantity
        })
    }

   const updatedCart = {  items : updatedCartItems  };

   this.cart = updatedCart

   return this.save()
} 


UserModel.methods.deleteFromCart = function(id){
    const updatedCartItems = this.cart.items.filter(item => {
        return item.productID.toString() !== id.toString();
    })
    this.cart.items = updatedCartItems
    this.save();
}

UserModel.methods.clearCart = function(){
    this.cart = {
        items : []
    }

    this.save();
}

module.exports = mongoose.model('User', UserModel)
