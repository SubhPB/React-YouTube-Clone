/* -- BYIMAAN -> THE FUTURE -- */

import { createSlice } from "@reduxjs/toolkit";

import { Content } from "../../../youtube/assists-jsx/apiInterfaces";
import { Data } from "../../../youtube/pages-jsx/channel-YT/ChannelTS";
import HistoryActions from './actions'

export interface HistoryStateTs {
    videos: Content[],
    channels: Data[]
};

const initialState: HistoryStateTs = {
    videos: [],
    channels: [],
} 

export const History = createSlice({
    name: 'history',
    initialState: initialState,
    reducers: HistoryActions
});

export const HistoryReducer = History.reducer;
export const {appendVideoInHistory, appendChannelInHistory} = HistoryActions