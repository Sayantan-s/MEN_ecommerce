import http from 'http';

class CustomError extends Error{
    constructor(status, msg){
        this.status = status;
        this.message = msg; 
    }

    static newError(statusCode){
        const errorMsg = http.STATUS_CODES[statusCode];
        return { statusCode, errorMsg };
    }

    static alreadyExists(){
        return CustomError.newError(409);
    }
}

export default CustomError;