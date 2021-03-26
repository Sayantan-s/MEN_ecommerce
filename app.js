const EventEmitter = require('events');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const shop = require('./routes/shop');
const admin = require('./routes/admin');
const User = require('./mongoose/models/user.model');
const { error } = require('./controllers/errorController');
const { dbConnect,getDb } = require('./db/db.connect');
const { ObjectID } = require('bson');
const dbMongooseConnect = require('./db/db.mongoose.connect');

const responseText = 'Hello I am listening';
const PORT  = 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({ extended  : true }));
app.use(bodyParser.json());
app.use(express.static('static'));

const Emitters = new EventEmitter();
Emitters.setMaxListeners(100);

app.use((req,res,next) => {
    User.findByID('6058b76766bf4decaacfa0f2',admin => {
        const { userName,email,cart,isAdmin,_id } = admin
        req.user = new User(userName, email, isAdmin, cart, new ObjectID(_id));
        next();
    })
})

app.use('/admin',admin)
app.use(shop);
app.use(error)

dbMongooseConnect(_ => {
    app.listen(PORT,(req,res) => {
        User
        .findOne()
        .then(user => {
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
        })
        .catch(err => console.log(err))
        console.log(responseText);
    });
})
