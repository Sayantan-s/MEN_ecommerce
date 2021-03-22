const { MongoClient } = require("mongodb")

const dbURI = `mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority`
// "mongodb://sayan:Sayantan@123@sayantan-shard-00-00.zc13y.mongodb.net:27017,sayantan-shard-00-01.zc13y.mongodb.net:27017,sayantan-shard-00-02.zc13y.mongodb.net:27017/Sayantan?ssl=true&replicaSet=atlas-3itog6-shard-0&authSource=admin&retryWrites=true&w=majority"
//`mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority`
let _db;

const dbConnect = callback => MongoClient.connect(dbURI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  //  connectTimeoutMS: 5000,
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