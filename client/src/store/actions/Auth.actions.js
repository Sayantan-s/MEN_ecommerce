import http from 'utils/http';

import {
    AUTHENTICATING,
    AUTHENTICATION_SUCCESSFULL,
    AUTHENTICATION_FAILED,
    LOGOUT_USER
} from 'store/types/isAuthenticated';

const IS_AUTHENTICATING = () => ({
    type: AUTHENTICATING
});

const IS_AUTHENTICATED = (type, data) => ({
    type,
    payload: data
});

const FAILED_TO_AUTHENTICATE = (error) => ({
    type: AUTHENTICATION_FAILED,
    payload: error
});

const LOGOUT = () => ({
    type: LOGOUT_USER
});

export const logout = (history) => {
    return async (dispatch) => {
        try {
            await dispatch(LOGOUT());
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    };
};

const Authenticate_user =
    ({ url = '/auth/register', input_data }, history) =>
    async (dispatch) => {
        try {
            dispatch(IS_AUTHENTICATING());

            const { data, status, headers } = await http({
                method: 'POST',
                url,
                data: input_data
            });

            http.defaults.headers.common['Authorization'] = `Bearer ${headers["x-access-token"]}`;

            if (
                (url.includes('register') && status === 201) ||
                (url.includes('login') && status === 200)
            ) {
                dispatch(IS_AUTHENTICATED(AUTHENTICATION_SUCCESSFULL, data));
                history.push('/collectives');
            }
        } catch (error) {
            return dispatch(FAILED_TO_AUTHENTICATE('Failed to authenticate!'));
        }
    };

const getAuthState = () => async(_, getState) => {
    console.log(getState())
}

const getNewAccessTokenOnRefresh = () => async (dispatch) => {
    try {
        const res = await http.get('/utilities/refresh');
    } catch (err) {
        return dispatch(FAILED_TO_AUTHENTICATE('Failed to authenticate!'));
    }
};

export { IS_AUTHENTICATING, IS_AUTHENTICATED, FAILED_TO_AUTHENTICATE, LOGOUT, Authenticate_user, getAuthState };
