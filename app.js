const EventEmitter = require('events');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const shop = require('./routes/shop');
const admin = require('./routes/admin');
const User = require('./model/user');
const { error } = require('./controllers/errorController');
const { dbConnect,getDb } = require('./db/db.connect');
const { ObjectID } = require('bson');

const responseText = 'Hello I am listening';
const PORT  = 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({ extended  : true }));
app.use(express.static('static'));

const Emitters = new EventEmitter();
Emitters.setMaxListeners(100);

app.use((req,res,next) => {
    getDb()
    .collection('user')
    .find()
    .toArray()
    .then(users => {
        if(users.length > 0){
            User.findByID('60559358a74ef224df8ee26b',admin => {
                const { userName,email,cart,isAdmin,_id } = admin
                req.user = new User(userName, email, isAdmin, cart, new ObjectID(_id));
                next();
            })
        }
        else{
            const newUser = new User('Nikemin','nike2021@ac.in',true,[]);
            newUser.createUser();
            next();
        }
    })
    .catch(err => console.log(err)); 
})
app.use('/admin',admin);
app.use(shop);
app.use(error)

dbConnect(_ => {
    app.listen(PORT,(req,res) => {
        console.log(responseText);
    });
})
