import http from 'utils/http';

import {
    AUTHENTICATING,
    AUTHENTICATION_SUCCESSFULL,
    AUTHENTICATION_FAILED
} from 'store/types/isAuthenticated';

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
    ({ url = '/auth/register', input_data }, history) =>
    async (dispatch) => {
        try {
            dispatch(IS_AUTHENTICATING());

            const { data, status } = await http({
                method: 'POST',
                url,
                data: input_data
            });

            if (status !== 200 && status === 201) {
                console.log(data);
                dispatch(IS_AUTHENTICATED(data));
                history.push('/collectives');
            }
        } catch (error) {
            console.log(error.response);
            return dispatch(FAILED_TO_AUTHENTICATE('Failed to authenticate!'));
        }
    };

export { IS_AUTHENTICATING, IS_AUTHENTICATED, FAILED_TO_AUTHENTICATE, Authorize_user };
