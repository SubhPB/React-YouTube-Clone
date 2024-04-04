/* -- BYIMAAN -> THE FUTURE -- */

import { StatusTs } from "../../targetVideos/targetVidTypes";
import { createSlice } from "@reduxjs/toolkit";
import AllActions from './actions';

export interface TargetCommentsTs {
    [commentId: string] : StatusTs
};

const initailState: TargetCommentsTs = {};

export const TargetCommentsSlice = createSlice({
    name: 'targetCommments',
    initialState: initailState,
    reducers: AllActions
});

const TargetCommentsReducer = TargetCommentsSlice.reducer;
export default TargetCommentsReducer;
export const { likeComment, dislikeComment, neutralComment  } = TargetCommentsSlice.actions; 