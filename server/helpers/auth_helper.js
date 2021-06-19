import bcrypt from 'bcrypt';

class AuthUtils {
    static async hashPassword(password) {
        return await bcrypt.hash(password, 12);
    }

    static async validatePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}

export default AuthUtils;
