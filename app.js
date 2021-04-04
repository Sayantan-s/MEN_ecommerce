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
const User = require('./mongoose/models/user.model');

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

app.use((req, res, next) => {
    if(!req.session.user) return next();
    User.findById(req.session.user._id)
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
        req.user = user;
        req.heyBro = "Hey!"
        next();
    }).catch(err => console.log(err));
})

app.use('/admin',admin)
app.use(shop);
app.use(auth);
app.use(error)


dbMongooseConnect(_ => {
    app.listen(PORT,(req,res) => {
        console.log(responseText);
    });
})

/*  <% if(!isAuth) { %>
                    <% if(route.name === 'Admin Products' || route.name === 'Add Products') { %>
                        <% return; %>
                    <% } %>
                    <a class="block mr-4 w-max font-medium tracking-wide uppercase <%= path === route.hash ? 'text-gray-300' : 'text-black' %>" href="<%= route.hash %>"><%= route.name %></a>
                <% } else {%>
                    <a class="block mr-4 w-max font-medium tracking-wide uppercase <%= path === route.hash ? 'text-gray-300' : 'text-black' %>" href="<%= route.hash %>"><%= route.name %></a>
                <% } %>*/