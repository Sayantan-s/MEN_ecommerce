const EventEmitter = require('events');
const path = require('path');
const crypto = require('crypto')

const express = require('express');
const csrf = require('csurf');
require('dotenv').config();

const app = express();

const shop = require('./routes/shop');
const admin = require('./routes/admin');
const auth = require('./routes/auth');
const { error } = require('./controllers/errorController');
const dbMongooseConnect = require('./db/db.mongoose.connect');
const sessions = require('./db/sessions');
const User = require('./mongoose/models/user.model');

const responseText = 'Hello I am listening';
const PORT  =  process.env.PORT || 3000;
const Emitters = new EventEmitter();
Emitters.setMaxListeners(100);

const middlewares = [
    express.urlencoded({ extended : true }),
    express.json(),
    express.static('static'),
    sessions,
    csrf(),
    require('connect-flash')()
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(middlewares)
app.use((req, res, next) => {
    if(!req.session.user) return next();
    User.findById(req.session.user._id)
    .then(user => {
        req.user = user;
        next();
    }).catch(err => console.log(err));
})

app.use((req,res,next) => {
    res.locals.isAuth = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
})

app.use('/admin',admin)
app.use(shop);
app.use(auth);
app.use(error)

dbMongooseConnect(_ => {
    app.listen(PORT,_ => {
        console.log(responseText);
    });
})

