const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
    uri : process.env.MONGODB_URI,
    collection : 'sessions'
})

module.exports = session({
    secret: 'ssh! secret',
    resave: false,
    saveUninitialized : false,
    store
})