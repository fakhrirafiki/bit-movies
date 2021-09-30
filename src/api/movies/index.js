import { call } from 'api/axios';
import { METHODS } from 'api/methods';


const subUrl = '';

export const getMovies = async (params) => {
    const response = await call(METHODS.GET, subUrl, params);
    return response.data;
};

export const getMovieById = async (id) => {
    const response = await call(METHODS.GET, subUrl, { i: id });
    return response.data;
};