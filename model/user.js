const { ObjectID } = require("bson");
const { getDb } = require("../db/db.connect");

module.exports = class User {
    constructor(name,email,isAdmin){
        this.userName = name;
        this.email = email;
        this.isAdmin = isAdmin || false;
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