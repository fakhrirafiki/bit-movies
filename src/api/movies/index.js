import { call } from 'api/axios';
import { METHODS } from 'api/methods';


const subUrl = '';

export const getMovies = async (params) => {
    const response = await call(METHODS.GET, subUrl, params);
    return response.data;
};