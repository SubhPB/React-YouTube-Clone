/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export const selectChnlHome = (state: RootState) => state.channel.home;

export const chnlHomeStateSelector = createSelector( selectChnlHome, state => state);