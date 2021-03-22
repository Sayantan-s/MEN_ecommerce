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

    getCart(cb){
       if(this.cart){
        const productId = this.cart.items.map(item => item.itemID);
        return getDb()
        .collection('product')
        .find({
            _id : { $in :  productId}
        })
        .toArray()
        .then(products => {
            const prods = products.map(product => (
                {
                    ...product,
                    quantity : this.cart.items.find(prod => prod.itemID.toString() === product._id.toString()).quantity
                }
            ))
            return cb(prods)
        })
        .catch(err => console.log(err));
       }
       else return cb({});
    }


    addToCart(item){
        let newQuantity = 1;
        let updatedCartItems = [];

        if(this.cart){
            const cartItemIndex = this.cart.items.findIndex(product => product.itemID.toString() === item._id.toString());
            console.log(this.cart, item._id);
            updatedCartItems = [...this.cart.items]

            if(cartItemIndex >= 0){
                newQuantity = this.cart.items[cartItemIndex].quantity + 1;
                updatedCartItems[cartItemIndex].quantity = newQuantity;
            }
            else{
                updatedCartItems.push({
                    itemID : new ObjectID(item._id),
                    quantity : newQuantity
                })
            }
        }
        else{
            updatedCartItems.push({
                itemID : new ObjectID(item._id),
                quantity : newQuantity
            })
        }
        const updatedCart = { items : updatedCartItems };
        return getDb()
        .collection('user')
        .updateOne({
            _id : new ObjectID(this._id)
        },
        {$set : { cart : updatedCart }})
    }

    deleteFromCart(id){
        const updatedCart = this.cart.items.filter(item => {
            return item.itemID.toString() !== id.toString();
        });

        return getDb()
        .collection('user')
        .updateOne({
            _id : new ObjectID(this._id)
        },
        {
            $set : { cart : {
                items : updatedCart
            } }
        })
    }

    addOrder(cb){
        this.getCart(products => {
            const order = {
                items : products,
                user : {
                    id : new ObjectID(this._id),
                    name : this.userName
                }
            }
            return getDb()
            .collection('orders')
            .insertOne(order)
            .then(_ => {
                this.cart = {};
                getDb()
                .collection('user')
                .updateOne({
                    _id : new ObjectID(this._id)
                },
                { $set : {
                    cart : {
                        items : []
                    }
                } })
                return cb(this._id);
            })
        })
    }


    getUserOrders(callback){
        return getDb()
        .collection('orders')
        .find()
        .toArray()
        .then(orders => {
            return callback(orders)
        })
        .catch(err => console.log(err))
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