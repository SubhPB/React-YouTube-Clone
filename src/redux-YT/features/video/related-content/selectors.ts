/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

const selectVideo = (state: RootState) => state.video;

export const selectRelatedContent = createSelector(selectVideo, (state) => state.relatedContent);