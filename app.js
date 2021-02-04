const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();


const shop = require('./routes/shop');
const admin = require('./routes/admin');
const { error } = require('./controllers/errorController');


const responseText = 'Hello I am listening';
const PORT  = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({ extended  : true }));
app.use(express.static('static'));


app.use(shop);
app.use('/admin',admin);
app.use(error)


app.listen(PORT,(req,res) => {
    console.log(responseText);
});