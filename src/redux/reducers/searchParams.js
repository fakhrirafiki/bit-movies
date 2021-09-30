import { SET_SEARCH_PARAMS, SET_PAGE_PARAMS } from "constants/initialType";

const initialState = {
    s: '',
    page: 1
};

export default function searchParams(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH_PARAMS:
            return {
                ...state,
                ...action.payload,
                page: 1
            };
        case SET_PAGE_PARAMS:
            return {
                ...state,
                page: action.payload
            };
        default:
            return state;
    }
}
