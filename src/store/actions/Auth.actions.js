import http from 'utils/http';

const {
    AUTHENTICATING,
    AUTHENTICATION_SUCCESSFULL,
    AUTHENTICATION_FAILED
} = require('store/types/isAuthenticated');

const IS_AUTHENTICATING = () => ({
    type: AUTHENTICATING
});

const IS_AUTHENTICATED = (data) => ({
    type: AUTHENTICATION_SUCCESSFULL,
    payload: data
});

const FAILED_TO_AUTHENTICATE = (error) => ({
    type: AUTHENTICATION_FAILED,
    payload: error
});

const Authorize_user =
    ({ url = '/auth/register', input_data }) =>
    async (dispatch, getState) => {
        dispatch(IS_AUTHENTICATING());

        const { status } = await http({
            method: 'POST',
            url: url,
            data: input_data
        });

        if (status !== 200 && status === 201) {
            return dispatch(IS_AUTHENTICATED());
        }

        if (status === 409) {
            return dispatch(FAILED_TO_AUTHENTICATE());
        }
    };

export { IS_AUTHENTICATING, IS_AUTHENTICATED, FAILED_TO_AUTHENTICATE, Authorize_user };
