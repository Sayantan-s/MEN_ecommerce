import axios from 'axios';
import { IS_AUTHENTICATED, IS_AUTHENTICATING } from 'store/actions/Auth.actions';
import { AUTHENTICATION_SUCCESSFULL } from 'store/types/isAuthenticated';
import store from '../store/store';

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use(
    async (config) => {
        const {
            AuthReducer: { isAuthenticated }
        } = store.getState();
        if(isAuthenticated){
            store.dispatch(IS_AUTHENTICATING());
            const { headers, data, status } = await axios('/api/utilities/refresh');
            if(status === 200){
                config.headers['Authorization'] = `Bearer ${headers['x-access-token']}`;
                const decodedMetaData = JSON.parse(atob(headers['x-access-token'].split('.')[1]));
                store.dispatch(
                    IS_AUTHENTICATED(AUTHENTICATION_SUCCESSFULL, {
                        decodedPayload: decodedMetaData,
                        ...data
                    })
                );
                console.log('REFRESHING TOKENS');
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

http.interceptors.response.use((response) => {
    console.log(response);

    return response;
});

export default http;
