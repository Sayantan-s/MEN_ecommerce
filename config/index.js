import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT,
    ACCESSTOKEN_SECRET,
    REFRESHTOKEN_SECRET,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
} = process.env;
