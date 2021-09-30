import { SET_MOVIES, RESET_MOVIES, SET_IS_LAST_PAGE } from "constants/initialType";

const initialType = {
    data: [],
    isLastPage: false
};

export default function searchParams(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                data: [...state.data, ...action.payload]
            };
        case SET_IS_LAST_PAGE:
            return {
                ...state,
                isLastPage: action.payload
            };
        case RESET_MOVIES:
            return initialType;
        default:
            return state;
    }
}
