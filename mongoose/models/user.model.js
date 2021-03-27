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

UserModel.methods.addToCart = item => {
    let updatedCartItems = [];
    let quantity = 1;
   if(this.cart){
        const itemTobeUpdatedIndex = this.cart.items.findIndex(product => {
            return product.productID.toString() === item._id.toString() 
        })
        console.log(itemTobeUpdatedIndex)
   }
   else{
        updatedCartItems.push({
            productID : item._id,
            quantity
        })
   }

   const updatedCart = {  items : updatedCartItems  };

   this.cart = updatedCart

   console.log(this);

}

module.exports = mongoose.model('User', UserModel)