import axios from 'axios';

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use(
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
);

export default http;
