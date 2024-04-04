/* -- BYIMAAN -> THE FUTURE -- */

import { PayloadAction } from "@reduxjs/toolkit";
import { TargetCommentsTs } from "./slice";
import { StatusTs } from "../../targetVideos/targetVidTypes";
import { IdActionType } from "../../targetVideos/targetVidTypes";

function likeComment(state: TargetCommentsTs, action: PayloadAction<IdActionType>){
    const commentId = action.payload.id;
    state[commentId] = StatusTs.LIKED;
};

function dislikeComment(state: TargetCommentsTs, action: PayloadAction<IdActionType>){
    const commentId = action.payload.id;
    state[commentId] = StatusTs.DISLIKE;
};

function neutralComment(state: TargetCommentsTs, action: PayloadAction<IdActionType>){
    const commentId = action.payload.id;
    const exist = Object.hasOwn(state,commentId);
    if (exist) state[commentId] = StatusTs.NEUTRAL;
}

export default { likeComment, dislikeComment, neutralComment }