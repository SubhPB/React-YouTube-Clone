/* -- BYIMAAN -> THE FUTURE -- */

import { PayloadAction } from "@reduxjs/toolkit";
import { IdActionType } from "./targetVidTypes";
import { VideoDataTs } from "./targetVidTypes";
import { StatusTs } from "./targetVidTypes";


function likeVideoAction(state: VideoDataTs, action: PayloadAction<IdActionType> ) {
    const videoId = action.payload.id;
    state[videoId].status =  StatusTs.LIKED
};

function dislikeVideoAction(state: VideoDataTs, action: PayloadAction<IdActionType> ) {
    const videoId = action.payload.id;
    state[videoId].status =  StatusTs.DISLIKE;
};

function neutralVideoAction(state: VideoDataTs, action: PayloadAction<IdActionType> ) {
    const videoId = action.payload.id;
    state[videoId].status =  StatusTs.NEUTRAL;
};



export const targetVideoActions = { likeVideoAction, dislikeVideoAction, neutralVideoAction };
