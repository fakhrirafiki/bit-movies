import { combineReducers } from "redux";
import errorRedux from "./errorRedux";
import loading from "./loading";
import searchParams from "./searchParams";
import movies from "./movies";

export default combineReducers({
    errorRedux,
    loading,
    searchParams,
    movies
});
