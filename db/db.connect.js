const { MongoClient } = require("mongodb")

const dbURI = `mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority`

let _db;

const dbConnect = callback => MongoClient.connect(dbURI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(client => {
    console.log("MongoDB is connected.");
    _db = client.db();
    return callback();
})
.catch(err => {
    console.log(err);
    throw err;
});

const getDb = _ => {
    if(_db){
        return _db;
    }
    throw 'Database not found';
}

module.exports = { dbConnect,getDb }