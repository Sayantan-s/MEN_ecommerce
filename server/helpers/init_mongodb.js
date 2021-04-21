import mongoose from 'mongoose'
import { DB_URI } from '../config'

const uri = DB_URI

const db = mongoose.connection;

export default (callback) => {
    mongoose.connect(
        uri,
        {
            useCreateIndex : true,
            useUnifiedTopology : true,
            useNewUrlParser: true,
            useFindAndModify: true
        }
      )
    db.on('error',err => console.log(err));
    db.once('open',_ => {
        console.log('DB connected...');
        return callback();
    })
    db.on('disconnected',_=>{
        return console.log('Disconnected from mongo!!');
    })

    process.on('SIGINT',async() => {
        await db.close();
        process.exit(0);
    })
}