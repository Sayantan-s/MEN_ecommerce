import {
    AUTHENTICATING,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_SUCCESSFULL,
    LOGOUT_USER
} from 'store/types/isAuthenticated';

const authState = {
    loading: false,
    data: null,
    isAuthenticated: false,
    error: false
};

const AuthReducer = (state = authState, { type, payload }) => {
    switch (type) {
        case AUTHENTICATING:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
                data: null,
                error: false
            };
        case AUTHENTICATION_SUCCESSFULL:
            const { decodedPayload } = payload;
            return {
                ...state,
                loading: false,
                isAuthenticated: new Date().getTime() / 1000 < decodedPayload.exp,
                data: payload,
                error: false
            };

        case LOGOUT_USER:
            return { ...authState };

        case AUTHENTICATION_FAILED:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                data: null,
                error: payload
            };
        default:
            return state;
    }
};

export default AuthReducer;
