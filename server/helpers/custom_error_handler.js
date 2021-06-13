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

    static alreadyExists() {
        return CustomError.newError(409);
    }
}

export default CustomError;
