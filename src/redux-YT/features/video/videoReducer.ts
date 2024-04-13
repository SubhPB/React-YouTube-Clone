/* -- BYIMAAN -> THE FUTURE -- */

import { combineReducers } from "redux";
import CommentsReducer from './comments/commentsSlice';
import TargetVideosReducer from "./targetVideos/targetVidSlice";
import TargetCommentsReducer from "./comments/targetComments/slice";
import VideoDetailsReducer from './details/slice' 
import RelatedContentReducer from './related-content/slice';

export const VideoReducer = combineReducers({
    comments: CommentsReducer,
    details: VideoDetailsReducer,
    relatedContent: RelatedContentReducer,
    targetVideos: TargetVideosReducer,
    targetComments: TargetCommentsReducer, 
});