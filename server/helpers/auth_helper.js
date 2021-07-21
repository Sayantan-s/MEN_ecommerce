import bcrypt from 'bcrypt';
import { ACCESSTOKEN_SECRET, REFRESHTOKEN_SECRET } from '../config';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

class AuthUtils {
    static async hashPassword(password) {
        return await bcrypt.hash(password, 12);
    }

    static async verifyPassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }

    static generate_JWT({ payload, expiry = '10s', SECRET = ACCESSTOKEN_SECRET }) {
        return jwt.sign(payload, SECRET, { expiresIn: expiry });
    }

    static verify_JWT({ token, SECRET = ACCESSTOKEN_SECRET }) {
        return jwt.verify(token, SECRET);
    }

    static generate_refreshToken() {
        return crypto.randomBytes(64).toString('hex');
    }

    static async createTokens({ payload }) {
        const accessToken = await AuthUtils.generate_JWT({ payload });

        const refreshToken = await AuthUtils.generate_JWT({
            payload,
            expiry: '1yr',
            SECRET: REFRESHTOKEN_SECRET
        });

        return { accessToken, refreshToken };
    }
}

export default AuthUtils;
