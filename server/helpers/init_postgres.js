import { Pool } from 'pg';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../config';

const db = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

db.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

const connection = async (cb) => {
    const client = await db.connect();
    try {
        return cb();
    } catch (error) {
        new Error('Failed to connected to the database!');
    } finally {
        client.release();
    }
};

process.on('SIGINT', async () => {
    await db.end();
    console.log('Disconnected!!');
    process.exit(0);
});

export { connection, db };
