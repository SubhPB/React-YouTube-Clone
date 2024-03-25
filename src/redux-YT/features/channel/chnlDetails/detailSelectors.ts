/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export const selectChnlDetails = (state : RootState) => state.channel.details;

export const chnlDetailsStateSelector = createSelector( selectChnlDetails, state => state );