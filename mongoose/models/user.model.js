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

UserModel.methods.addToCart = (item,id) => {
    let updatedCartItems = [];
    let newQuantity = 1;
   if(this.cart){
        if(this.cart.items.length > 0){
            const itemTobeUpdatedIndex = this.cart.items.findIndex(product => {
                return product.productID.toString() === item._id.toString() 
            })
            console.log(itemTobeUpdatedIndex)
        }
   }
   else{
        updatedCartItems.push({
            productID : item._id,
            quantity : newQuantity
        })
   }

   const updatedCart = {  items : updatedCartItems  };

   console.log(this)

   return mongoose.model('User').updateOne({
       _id : id
   },{
       cart : updatedCart
   })
   .then(_ => console.log("Product has been updated"))
   .catch(err => console.log(err))
}


module.exports = mongoose.model('User', UserModel)
