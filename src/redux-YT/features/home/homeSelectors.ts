/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectHome = (state: RootState) => state.home;

export const homeStateSelector = createSelector( selectHome, state => state );
