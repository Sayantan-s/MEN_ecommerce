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

module.exports = mongoose.model('User', UserModel)