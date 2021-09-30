import { SET_LOADING } from "constants/initialType";

export const setMovieLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    };

};