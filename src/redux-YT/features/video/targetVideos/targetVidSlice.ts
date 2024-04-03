/* -- BYIMAAN -> THE FUTURE -- */

import { createSlice } from "@reduxjs/toolkit";
import { VideoDataTs } from "./targetVidTypes";
import { targetVideoActions } from "./targetVidActions";

const initailState: VideoDataTs = {};

export const TargetVideosSlice = createSlice({
    name: 'targetVideos',
    initialState: initailState,
    reducers: {
        ...targetVideoActions,
    }
});

const TargetVideosReducer = TargetVideosSlice.reducer;
export const {likeVideoAction, dislikeVideoAction, neutralVideoAction, addVideoComment, deleteVideoComment} = TargetVideosSlice.actions;
export default TargetVideosReducer;