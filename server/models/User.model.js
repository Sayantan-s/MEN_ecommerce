import { Schema, model } from 'mongoose'
import AuthUtils from '../helpers/auth_helper'
const UserSchema = new Schema({
    fullname : {
        type : String,
        required: true
    },

    username : {
        type : String,
        required: true,
        minlength: 6,
        maxlength : 20
    },

    email : {
        type : String,
        required: true,
        unique : true,
        lowercase: true
    },

    password : {
        type : String,
        required : true,
        minlength : 7,
        maxlength : 15,
        select : false
    }
})

UserSchema.pre("save",async function(next){
    this.password = await AuthUtils.hashPassword(this.password);
    console.log("Your password is hashed!!")
    next();
})

const User = model('user',UserSchema);

export default User;