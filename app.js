const EventEmitter = require('events');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const shop = require('./routes/shop');
const admin = require('./routes/admin');
const auth = require('./routes/auth');
const { error } = require('./controllers/errorController');
const dbMongooseConnect = require('./db/db.mongoose.connect');
const sessions = require('./db/sessions');

const responseText = 'Hello I am listening';
const PORT  =  process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({ extended  : true }));
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(sessions)

const Emitters = new EventEmitter();
Emitters.setMaxListeners(100);


app.use(auth)
app.use('/admin',admin)
app.use(shop);
app.use(error)

dbMongooseConnect(_ => {
    app.listen(PORT,(req,res) => {
        console.log(responseText);
    });
})
