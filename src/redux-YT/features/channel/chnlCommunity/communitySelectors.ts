/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export const selectCommunity = (state : RootState) => state.channel.community;

export const communityStateSelector = createSelector( selectCommunity, state => state );