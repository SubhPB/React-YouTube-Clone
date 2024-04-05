/* -- BYIMAAN -> THE FUTURE -- */

import { HistoryStateTs } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Content } from "../../../youtube/assists-jsx/apiInterfaces";
import { Data } from "../../../youtube/pages-jsx/channel-YT/ChannelTS";

function appendVideoInHistory(state: HistoryStateTs, action: PayloadAction<Content>){
    state.videos.push(action.payload);
};

function appendChannelInHistory(state: HistoryStateTs, action: PayloadAction<Data>){
    state.channels.push(action.payload);
};


export default { appendVideoInHistory, appendChannelInHistory };