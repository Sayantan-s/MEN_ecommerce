const EventEmitter = require('events');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const shop = require('./routes/shop');
const admin = require('./routes/admin');
const User = require('./mongoose/models/user.model');
const { error } = require('./controllers/errorController');
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
    User.findById('605e29b8d3da90f2eb6dd06c')
    .then(user => {
        req.user = user;
        next();
    }).catch(err => console.log(err));
})

app.use('/admin',admin)
app.use(shop);
app.use(error)

dbMongooseConnect(_ => {
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
    app.listen(PORT,(req,res) => {
        console.log(responseText);
    });
})
