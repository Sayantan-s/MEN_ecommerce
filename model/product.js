const Cart = require('./cart');
const { getDb } = require('../db/db.connect');
const { ObjectID } = require('bson');

module.exports = class Product {
    constructor(name,price,img,desc,id,adminId){
        this.name = name,
        this.price = price;
        this.image = img;
        this.des = desc;
        this._id = id ? new ObjectID(id) : null;
        this.admin = adminId
    }

    save(){
        let dbnew;
        if(this._id){
            dbnew = getDb().collection('product').updateOne({ _id : this._id },{$set : this})
        }
        else{
            dbnew = getDb().collection('product').insertOne(this)  
        }
        return dbnew.then(result => console.log(result))
        .catch(err => console.log(err))
    }

    static fetchproducts(callback){
      return getDb()
      .collection('product')
      .find()
      .toArray()
      .then(product => callback(product))
      .catch(err =>console.log(err));
    }

    static findProductByID(id,callback){
        return getDb()
        .collection('product')
        .findOne({ _id : new ObjectID(id) },(err,product) => {
            if(err) return console.log(err);
            console.log(product);
            return callback(product);
        })
    }
    static delete(id){
       return getDb()
       .collection('product')
       .deleteOne({
           _id : new ObjectID(id)
       })
       .then(_ => {
           console.log(`${id} deleted.`)
       })
       .catch(err => console.log(err));
    }
}