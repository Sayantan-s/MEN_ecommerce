const mongoose = require('mongoose');

module.exports = callback => {
    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : true
    })
    .then(() => {
        console.log("Connected to mongo through mongoose!")
        return callback();
    })
    .catch(err => console.log(err))
}