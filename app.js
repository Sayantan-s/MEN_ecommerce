const EventEmitter = require('events');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const shop = require('./routes/shop');
const admin = require('./routes/admin');
const auth = require('./routes/auth');
const User = require('./mongoose/models/user.model');
const { error } = require('./controllers/errorController');
const dbMongooseConnect = require('./db/db.mongoose.connect');
const session = require('express-session');

const responseText = 'Hello I am listening';
const PORT  = 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({ extended  : true }));
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(session({ secret : 'its secret!',resave : false, saveUninitialized: false }))

const Emitters = new EventEmitter();
Emitters.setMaxListeners(100);

app.use((req,res,next) => {
    User.findById('6061f4b4bc69ff8a7d35cec7')
    .then(user => {
        console.log(user)
        if(!user){
            const admin = new User({
                fullName : 'NikeAdmin',
                email : 'nikead@ac.in',
                cart : {
                    items : []
                }
            })
            admin.save()
        }
        req.user = user;
        next();
    }).catch(err => console.log(err));
})

app.use(auth)
app.use('/admin',admin)
app.use(shop);
app.use(error)

dbMongooseConnect(_ => {
    app.listen(PORT,(req,res) => {
        console.log(responseText);
    });
})
