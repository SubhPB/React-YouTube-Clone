/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { ChnlState, ChnlStatus } from "./slice";

const selectSubcription = (state: RootState) =>  state.channel.subcription;

export const selectSubcribedChannelsId = createSelector( selectSubcription, (state: ChnlState) => {
    const keys = Object.keys(state);
    return keys.filter( (key) => state[key] == ChnlStatus.SUBCRIBE );
});