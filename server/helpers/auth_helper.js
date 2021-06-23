import bcrypt from 'bcrypt';
import { ACCESSTOKEN_SECRET } from '../config';
import jwt from 'jsonwebtoken';

class AuthUtils {
    static async hashPassword(password) {
        return await bcrypt.hash(password, 12);
    }

    static async verifyPassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }

    static async generate_JWT({ payload, expiry = '120s', SECRET = ACCESSTOKEN_SECRET }) {
        return await jwt.sign(payload, SECRET, { expiresIn: expiry });
    }

    static async verify_JWT({ token, SECRET = ACCESSTOKEN_SECRET }) {
        return await jwt.verify(token, SECRET);
    }
}

export default AuthUtils;
