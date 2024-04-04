/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import { StatusTs } from "../../targetVideos/targetVidTypes";
import { TargetCommentsTs } from "./slice";

export const selectTargetCmnts = (state: RootState) => state.video.targetComments;

export const selectLikedComments = createSelector( selectTargetCmnts, function(state: TargetCommentsTs): string[]{
    return Object.keys(state).filter( k => state[k] === StatusTs.LIKED )
});

export const selectDislikedComments = createSelector(  selectTargetCmnts , function(state: TargetCommentsTs): string[]{
    return Object.keys(state).filter( k => state[k] === StatusTs.DISLIKE )
});
