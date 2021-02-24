const EventEmitter = require('events');
const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const shop = require('./routes/shop');
const admin = require('./routes/admin');
const { error } = require('./controllers/errorController');
const ProductModel = require('./sql/models/product.model');

const responseText = 'Hello I am listening';
const PORT  = 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({ extended  : true }));
app.use(express.static('static'));

const Emitters = new EventEmitter();

Emitters.setMaxListeners(100);

app.use(shop);
app.use('/admin',admin);
app.use(error)

ProductModel
.sync()
.then(res => {
    app.listen(PORT,(req,res) => {
        console.log(responseText);
    });
})
.catch(err => console.log(err))