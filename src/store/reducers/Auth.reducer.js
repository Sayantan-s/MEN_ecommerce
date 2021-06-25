import {
    AUTHENTICATING,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_SUCCESSFULL
} from 'store/types/isAuthenticated';

const authState = {
    loading: false,
    isAuthenticated: false,
    tokens: null,
    error: false
};

const AuthReducer = (state = authState, { type, payload }) => {
    switch (type) {
        case AUTHENTICATING:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
                tokens: null,
                error: false
            };
        case AUTHENTICATION_SUCCESSFULL:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                tokens: payload,
                error: false
            };
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                tokens: null,
                error: payload
            };
        default:
            return state;
    }
};

export default AuthReducer;
