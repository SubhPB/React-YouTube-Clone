/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { StatusTs } from "./targetVidTypes";

export const selectTargetVideos = (state: RootState) => state.video.targetVideos;

export const selectLikedVideos = createSelector( selectTargetVideos, (state): string[] => {
    const keys =  Object.keys(state);
    return keys.filter( (key, ind) => state[key].status === StatusTs.LIKED );
});

export const selectDisLikedVideos = createSelector( selectTargetVideos, (state): string[] => {
    const keys =  Object.keys(state);
    return keys.filter( (key, ind) => state[key].status === StatusTs.DISLIKE );
});



// export const allTargetVideosStateSelector = createSelector(  )