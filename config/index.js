import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_DATABASE,
    DB_PASSWORD,
    CLIENT,
    ACCESSTOKEN_SECRET,
    REFRESHTOKEN_SECRET,
    CLOUD_NAME,
    API_KEY,
    API_SECRET
} = process.env;
