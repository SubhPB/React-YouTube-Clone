/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

const selectVideoComments = (state: RootState) => state.video.comments;

export const videoCommentsSelector = createSelector( selectVideoComments, state => state );