import AuthUtils from "../helpers/auth_helper";
import CustomError from "../helpers/custom_error_handler";

const isAuth = async(req, res, next) => {
    const headers = req.headers.authorization;
    if(!headers){
       const error = CustomError.newError(401, 'User not authorized!');
       return next(error);
    }
    const [_ , token] = headers.split(' ');
    const { role, username, _id } = await AuthUtils.verify_JWT({ token });
    req.user = { role, username, _id };
    next();
};

export default isAuth;
