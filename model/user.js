const { ObjectID } = require("bson");
const { getDb } = require("../db/db.connect");

module.exports = class User {
    constructor(name,email,isAdmin,cart,id){
        this.userName = name;
        this.email = email;
        this.isAdmin = isAdmin || false;
        this.cart = cart
        this._id = id
    }
    createUser(){
        return getDb()
        .collection('user')
        .insertOne(this) 
        .then(_ => {
            return console.log(`${this.userName} is new admin!`);
        })
        .catch(err => console.log(err));
    }

    addToCart(item){ 
        const updatedCart = { items : [ { itemID : new ObjectID(item._id),quantity : 1 } ] };
        return getDb()
        .collection('user')
        .updateOne({
            _id : new ObjectID(this._id)
        },
        {$set : { cart : updatedCart }})
    }

    static findByID(id,cb){
        return getDb()
        .collection('user')
        .findOne({
            _id : new ObjectID(id)
        },(err,user) => {
            if(err) return console.log(err);
            console.log(user);
            return cb(user);
        })
    }
}