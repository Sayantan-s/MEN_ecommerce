import bcrypt from 'bcrypt'
import { HASHING_SALT } from '../config/index' 

class AuthUtils {

    static async hashPassword(password){
        return await bcrypt.hash(password,+HASHING_SALT);
    }

    static async validatePassword(password,hash){
        return await bcrypt.compare(password,hash);
    }

}

export default AuthUtils;