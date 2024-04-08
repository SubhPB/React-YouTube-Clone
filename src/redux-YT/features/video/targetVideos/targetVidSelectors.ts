/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { StatusTs, VideoDataTs } from "./targetVidTypes";
import { Comment } from "../../../../youtube/assists-jsx/vidComments";

export const selectTargetVideos = (state: RootState) => state.video.targetVideos;

export const selectLikedVideos = createSelector( selectTargetVideos, (state): string[] => {
    const keys =  Object.keys(state);
    return keys.filter( (key, ind) => state[key].status === StatusTs.LIKED );
});

export const selectDisLikedVideos = createSelector( selectTargetVideos, (state): string[] => {
    const keys =  Object.keys(state);
    return keys.filter( (key, ind) => state[key].status === StatusTs.DISLIKE );
});

export const selectComments = (videoId: string) => createSelector( selectTargetVideos, (state: VideoDataTs):Comment[] => {
    if (Object.hasOwn(state, videoId)){
        return state[videoId].myComments;
    };
    return []
});


// export const allTargetVideosStateSelector = createSelector(  )