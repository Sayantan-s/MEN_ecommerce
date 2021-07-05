import {
    AUTHENTICATING,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_SUCCESSFULL
} from 'store/types/isAuthenticated';

const userMetaData = JSON.parse(localStorage.getItem('user_info'));

const authState = {
    loading: false,
    data: userMetaData,
    error: false
};

const AuthReducer = (state = authState, { type, payload }) => {
    switch (type) {
        case AUTHENTICATING:
            return {
                ...state,
                loading: true,
                data: null,
                error: false
            };
        case AUTHENTICATION_SUCCESSFULL:
            localStorage.setItem('user_info', JSON.stringify(payload));
            return {
                ...state,
                loading: false,
                data: payload,
                error: false
            };
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                error: payload
            };
        default:
            return state;
    }
};

export default AuthReducer;
