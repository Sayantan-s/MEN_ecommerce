import dotenv from 'dotenv';

dotenv.config();

const {
    PORT,
    ACCESSTOKEN_SECRET,
    REFRESHTOKEN_SECRET,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
} = process.env;

export { 
    PORT,
    ACCESSTOKEN_SECRET,
    REFRESHTOKEN_SECRET,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
 } 