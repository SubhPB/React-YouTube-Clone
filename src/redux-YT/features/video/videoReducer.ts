/* -- BYIMAAN -> THE FUTURE -- */

import { combineReducers } from "redux";
import CommentsReducer from './comments/commentsSlice';
import TargetVideosReducer from "./targetVideos/targetVidSlice";
import TargetCommentsReducer from "./comments/targetComments/slice";

export const VideoReducer = combineReducers({
    comments: CommentsReducer,
    targetVideos: TargetVideosReducer,
    targetComments: TargetCommentsReducer 
});