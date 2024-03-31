/* -- BYIMAAN -> THE FUTURE -- */

import { PayloadAction } from "@reduxjs/toolkit";
import { IdActionType } from "./targetVidTypes";
import { VideoDataTs } from "./targetVidTypes";
import { StatusTs } from "./targetVidTypes";


function likeVideoAction(state: VideoDataTs, action: PayloadAction<IdActionType> ) {
    const videoId = action.payload.id;
    const videoExist = Object.keys(state).includes(videoId);
    if (videoExist){
        state[videoId].status = StatusTs.LIKED;
    } else {
        state[videoId] = {
            status : StatusTs.LIKED,
            myComments: [],
        }
    }
};

function dislikeVideoAction(state: VideoDataTs, action: PayloadAction<IdActionType> ) {
    const videoId = action.payload.id;
    const videoExist = Object.keys(state).includes(videoId);
    if (videoExist){
        state[videoId].status = StatusTs.DISLIKE;
    } else {
        state[videoId] = {
            status : StatusTs.DISLIKE,
            myComments: [],
        }
    }
};

function neutralVideoAction(state: VideoDataTs, action: PayloadAction<IdActionType> ) {
    const videoId = action.payload.id;
    const videoExist = Object.keys(state).includes(videoId);
    if (videoExist){
        // if videoExists & it's state going to be neutral & do not have comments, there is no sense to save it in state.
        const haveComments = state[videoId].myComments.length > 0
        haveComments ? state[videoId].status = StatusTs.NEUTRAL : delete state[videoId]
    } else {
        state[videoId] = {
            status : StatusTs.NEUTRAL,
            myComments: [],
        }
    }
};



export const targetVideoActions = { likeVideoAction, dislikeVideoAction, neutralVideoAction };
