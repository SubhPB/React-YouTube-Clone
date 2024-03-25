/* -- BYIMAAN -> THE FUTURE -- */

import { combineReducers } from "redux";
import CommentsReducer from './comments/commentsSlice';

export const VideoReducer = combineReducers({
    comments: CommentsReducer,
})