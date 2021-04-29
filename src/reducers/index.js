import { combineReducers } from "redux";
import loggedReducer from "./isLogeed";
import counterReducer from "./counter";

const allReducers = combineReducers({
    // name : value or ...just the one if its the same
    counterReducer,
    loggedReducer
});

export default allReducers