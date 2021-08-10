import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_DATABASE,
    DB_PASSWORD,
    ACCESSTOKEN_SECRET,
    REFRESHTOKEN_SECRET,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
} = process.env;
