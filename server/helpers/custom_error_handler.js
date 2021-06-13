import http from 'http';

class CustomError extends Error {
    constructor(status, msg) {
        super();
        this.status = status;
        this.message = msg;
    }

    static newError(statusCode, message) {
        const errorMsg = message || http.STATUS_CODES[statusCode];
        return { statusCode, errorMsg };
    }

    static alreadyExists(message) {
        return CustomError.newError(409, message);
    }
}

export default CustomError;
