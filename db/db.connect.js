const { MongoClient } = require("mongodb")

const dbURI = `mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority`

module.exports = callback => MongoClient.connect(dbURI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(client => {
    console.log("MongoDB is connected.");
    return callback(client);
})
.catch(err => {
    console.log(err);
});

