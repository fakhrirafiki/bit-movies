import { SET_SEARCH_PARAMS, SET_IS_LAST_PAGE, RESET_MOVIES, SET_MOVIES, SET_PAGE_PARAMS } from "constants/initialType";


export const setSearchParams = (payload) => {
    return {
        type: SET_SEARCH_PARAMS,
        payload
    };
};

export const setPageParams = (payload) => {
    return {
        type: SET_PAGE_PARAMS,
        payload
    };
};

export const setMoviesData = (payload) => {
    return {
        type: SET_MOVIES,
        payload
    };
};

export const resetMoviesData = () => {
    return {
        type: RESET_MOVIES,
    };
};

export const setIsLastPage = (payload) => {
    return {
        type: SET_IS_LAST_PAGE,
        payload
    };
};