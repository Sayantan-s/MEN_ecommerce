import http from 'http';

class CustomError extends Error {
    constructor(status, msg) {
        super();
        this.status = status;
        this.message = msg;
    }

    static newError(statusCode, message) {
        const errorMsg = message || http.STATUS_CODES[statusCode];
        return new CustomError(statusCode, errorMsg);
    }

    static alreadyExists(message = "Invalid email/password!") {
        return CustomError.newError(409, message);
    }
}

export default CustomError;
