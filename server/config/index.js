import dotenv from 'dotenv'

dotenv.config();

export const { PORT, DB_URI, HASHING_SALT } = process.env;