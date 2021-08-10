import {
    AUTHENTICATING,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_SUCCESSFULL,
    LOGOUT_USER,
    USER_IS_AUTHENTICATED
} from 'store/types/isAuthenticated';

const userMetaData = JSON.parse(localStorage.getItem('user_info'));

const authState = {
    loading: false,
    data: userMetaData,
    isAuthenticated: userMetaData ? true : false,
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
            localStorage.setItem('user_info', JSON.stringify(payload));

            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: payload,
                error: false
            };

        case USER_IS_AUTHENTICATED:
            const { data, userIsAuthenticated } = payload;

            return {
                ...state,
                loading: false,
                isAuthenticated: userIsAuthenticated(),
                data,
                error: ''
            };

        case LOGOUT_USER:
            localStorage.removeItem('user_info');

            return {
                ...state,
                loading: false,
                data: null,
                isAuthenticated: false,
                error: false
            };

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
