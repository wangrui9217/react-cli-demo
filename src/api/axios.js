import axios from 'axios'
import {BASE_URL} from './config'

const _axios = axios.create({
    baseURL:BASE_URL,
    timeout: 30000 // 超时30秒
})

_axios.interceptors.request.use(
    (config) => {
        config.headers.token = 1111;
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    localStorage.clear();
                    break;
            }

        }
        return Promise.reject(error);
    }
);

export default _axios
