import axios from 'axios';
import { IS_AUTHENTICATED } from 'store/actions/Auth.actions';
import { AUTHENTICATION_SUCCESSFULL } from 'store/types/isAuthenticated';
import store from '../store/store'

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use(req => { 
    console.log(store.getState());
    const { AuthReducer : { isAuthenticated } } = store.getState();
    if((req.url !== /register/i || req.url !== /login/i)){
        (async() => {
            const { headers, data } = await axios('/api/utilities/refresh');
            http.defaults.headers.common["Authorization"] = `Bearer ${headers["x-access-token"]}`
            const decodedMetaData = JSON.parse(atob(headers["x-access-token"].split('.')[1]))
            store.dispatch(
                IS_AUTHENTICATED(
                    AUTHENTICATION_SUCCESSFULL,
                    {
                        decodedPayload : decodedMetaData,
                        ...data
                    }
                )
            )
        })()
    }
    return req    
})

/*http.interceptors.request.use(
    (config) => {
        let userMetaData = window.localStorage.getItem('user_info');
        if (userMetaData) {
            const { accessToken } = JSON.parse(userMetaData);
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config; 
    },
    (error) => {
        Promise.reject(error);
    }
);*/

/*http.interceptors.request.use(
    (response) => response,
    (error) => {
        const code = error && error.response ? error.response.status : 0;
        if (code === 401) {
            console.log(code + 'Hello');
        }

        return Promise.reject(error);
    }
);*/

export default http;
