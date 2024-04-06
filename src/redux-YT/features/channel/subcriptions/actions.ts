/* -- BYIMAAN -> THE FUTURE -- */

import { PayloadAction } from "@reduxjs/toolkit";
import { ChnlState, ChnlStatus } from "./slice";
import { IdActionType } from "../../video/targetVideos/targetVidTypes";

function subcribreChnl(state: ChnlState, action: PayloadAction<IdActionType>){
    state[action.payload.id] = ChnlStatus.SUBCRIBE;
};

function unSubcribeChnl(state: ChnlState, action: PayloadAction<IdActionType>){
    state[action.payload.id] = ChnlStatus.UNSUBCRIBE;
}

export const allSubcriptionActions = {subcribreChnl, unSubcribeChnl}