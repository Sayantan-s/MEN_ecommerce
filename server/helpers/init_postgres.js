import { Pool } from 'pg';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../config';

const client  = new Pool({
    host : DB_HOST,
    port : DB_PORT,
    user : DB_USER,
    password : DB_PASSWORD,
    database : DB_DATABASE
})

client.on("connect",() => {
    console.log(`Connected to db --> ${DB_DATABASE}`);
})

client.on("end", () => {
    console.log(`Disconnected from db --> ${DB_DATABASE}`);
})

client.on('error', (err) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

process.on("SIGINT",async() => {
    await client.close();
    console.log("Disconnected!!");
}) 

const connection = async(cb) => {
    await client.connect();
    return cb()
}
export default connection