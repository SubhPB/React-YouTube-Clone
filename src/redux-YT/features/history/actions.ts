/* -- BYIMAAN -> THE FUTURE -- */

import { HistoryStateTs } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Content } from "../../../youtube/assists-jsx/apiInterfaces";
import { Data } from "../../../youtube/pages-jsx/channel-YT/ChannelTS";

function appendVideoInHistory(state: HistoryStateTs, action: PayloadAction<Content>){
    const allIds = state.videos.map( vid => vid?.video?.videoId );
    const thisVideoId = action.payload?.video?.videoId;

    if (allIds.includes(thisVideoId)){
        // if video already exists our task is to take it to front of array (at array[0])
        state.videos = [action.payload,...state.videos.filter( vid => vid?.video?.videoId !== thisVideoId)];
    } else {
        // placing at array[0]
        state.videos.unshift(action.payload);
    };
};

function appendChannelInHistory(state: HistoryStateTs, action: PayloadAction<Data>){
    const allChannelIds = state.channels.map( chnl => chnl?.channelId );
    const thisChnlId = action?.payload?.channelId;
    if (!allChannelIds.includes(thisChnlId)){
        state.channels.push(action.payload);  
    };
};


export default { appendVideoInHistory, appendChannelInHistory };