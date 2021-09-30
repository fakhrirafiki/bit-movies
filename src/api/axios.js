import axios from "axios";
import store from "redux/store";
import { METHODS } from 'api/methods';
import { SET_ERROR } from "constants/initialType";

const instance = axios.create();

instance.interceptors.response.use(
    (response) => response,
    (err) => {
        console.error(err.message);
        store.dispatch({ type: SET_ERROR, payload: err.message });
        return Promise.reject(err);
    },
);

export const call = (method, subUrl = '', data = {}, options) => {
    const config = {
        ...options,
        baseURL: `${process.env.REACT_APP_AUTH_URL}/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
        method,
        url: subUrl,
        headers: {
            ...(options && options.headers ? options.headers : {}),
            'Content-Type': 'application/json',
        },
    };

    const payload = { ...data };
    if (method === METHODS.GET) {
        Object.keys(payload).forEach((key) => {
            if (payload[key] === null || payload[key] === '') {
                delete payload[key];
            }
        });
        config.params = payload;
    } else {
        config.data = payload;
    }

    return instance.request(config);
};

export default instance;