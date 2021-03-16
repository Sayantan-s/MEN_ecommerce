const { getDb } = require("../db/db.connect");

module.exports = class Admin {
    constructor(name,email){
        this.userName = name;
        this.email = email;
        this.isAdmin = false;
    }
    createUser(){
        getDb()
        .collection('user')
        .insertOne(this) 
        .then(_ => {
            return console.log(`${this.userName} is new admin!`);
        })
        .catch(err => console.log(err));
    }
}