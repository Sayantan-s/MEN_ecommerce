const mongoose = require('mongoose');

module.exports = callback => {
    mongoose.connect(`mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority`,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("Connected to mongo through mongoose!")
        return callback();
    })
    .catch(err => console.log(err))
}