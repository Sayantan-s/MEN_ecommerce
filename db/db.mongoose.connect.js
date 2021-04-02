const mongoose = require('mongoose');

//mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority

module.exports = callback => {
    mongoose.connect(`mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority`,{
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