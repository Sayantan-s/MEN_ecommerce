const EventEmitter = require('events');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

const db = require('./db/db');
const shop = require('./routes/shop');
const admin = require('./routes/admin');
const { error } = require('./controllers/errorController');

const responseText = 'Hello I am listening';
const PORT  = 3000;

db
.execute('SELECT * FROM products')
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({ extended  : true }));
app.use(express.static('static'));

const Emitters = new EventEmitter();

Emitters.setMaxListeners(100);

app.use(shop);
app.use('/admin',admin);
app.use(error)


app.listen(PORT,(req,res) => {
    console.log(responseText);
});