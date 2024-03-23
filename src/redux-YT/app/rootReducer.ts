/* -- BYIMAAN -> THE FUTURE -- */

import { combineReducers } from "redux";
import HomeReducer from "../features/home/homeActions";

const rootReducer = combineReducers({
    home : HomeReducer
});

export default rootReducer;