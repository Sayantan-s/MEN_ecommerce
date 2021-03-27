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

UserModel.methods.addToCart = itemId => {
    let updatedCartItems = [];
    let quantity = 1;
   if(this.cart){
        const itemTobeUpdatedIndex = this.cart.items.findIndex(item => {
            return item.productID.toString() === itemId.toString() 
        })
        console.log(itemTobeUpdatedIndex)
   }
   else{
        updatedCartItems.push({
            productID : itemId,
            quantity
        })
   }

   const updatedCart = {  items : updatedCartItems  };

   return this.save()

}

module.exports = mongoose.model('User', UserModel)