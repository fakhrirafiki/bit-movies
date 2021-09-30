import { SET_ERROR } from "constants/initialType";


export const setReduxError = (payload) => {
    return {
        type: SET_ERROR,
        payload
    };

};