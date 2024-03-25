/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { ChnlSearchSlice } from "./searchSlice";
import { RootState } from "../../../app/store";

export const selectChnlSearch = (state: RootState) => state.channel.search;
export const chnlSearchStateSelector = createSelector( selectChnlSearch, state => state );