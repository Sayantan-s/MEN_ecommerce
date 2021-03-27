const mongoose = require('mongoose');

const Schema = mongoose.Schema

const productSchema  = new Schema({
    name : {
        type : String,
        required : true 
    },
    tagname : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

module.exports = mongoose.model('Products', productSchema)