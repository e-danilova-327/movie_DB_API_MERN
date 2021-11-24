import { combineReducers } from "redux";
import movies from "./movies.js";
import auth from "./auth.js";

export default combineReducers({
    movies,
    auth,
});
