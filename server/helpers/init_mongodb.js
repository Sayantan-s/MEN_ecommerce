import mongoose from 'mongoose'
import { DB_URI } from '../config'

const uri = DB_URI

export default (callback) => {
    mongoose.connect(
        uri,
        {
            useCreateIndex : true,
            useUnifiedTopology : true,
            useNewUrlParser: true,
            useFindAndModify: true
        }
      ).then(_ => {
          console.log("Connected to Mongodb through mongoose")
          return callback();
      })
      .catch(err => console.log(err))
}