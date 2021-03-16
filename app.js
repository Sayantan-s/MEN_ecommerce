const EventEmitter = require('events');
const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const shop = require('./routes/shop');
const admin = require('./routes/admin');
const { error } = require('./controllers/errorController');
const { dbConnect,getDb } = require('./db/db.connect');

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
            console.log("Present")
        }
    
        else console.log("Not Present");
    })
    .catch(err => console.log(err));
    req.body = {...req.body,user : "I am sharer!"}
    next();
   
})
app.use('/admin',admin);
app.use(shop);
app.use(error)

dbConnect(_ => {
    app.listen(PORT,(req,res) => {
        console.log(responseText);
    });
})
