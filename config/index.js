require('dotenv').config();

const {
    PORT,
    ACCESSTOKEN_SECRET,
    REFRESHTOKEN_SECRET,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
} = process.env;

const COOKIE_EXPIRATION = 365 * 24 * 60 * 60 * 1000

module.exports = { 
    PORT,
    ACCESSTOKEN_SECRET,
    REFRESHTOKEN_SECRET,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    COOKIE_EXPIRATION
 }  