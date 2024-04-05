/* -- BYIMAAN -> THE FUTURE -- */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { HistoryStateTs } from "./slice";
import { Content } from "../../../youtube/assists-jsx/apiInterfaces";

function selectHistory(state: RootState) { return state.history };

export const selectVideosFromHistory = createSelector(selectHistory, (state: HistoryStateTs) => state.videos)

export const selectChannelsFromHistory = createSelector(selectHistory, (state: HistoryStateTs) => state.channels)

export const selectVideosByIdsFromHistory = createSelector( selectHistory, function(state: HistoryStateTs): Content[]{
    return []
});