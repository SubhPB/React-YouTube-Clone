/* -- BYIMAAN -> THE FUTURE -- */

import { combineReducers } from "redux";
import HomeReducer from "../features/home/homeSlice";
import { ChannelReducer } from "../features/channel/channelReducer";
import { VideoReducer } from "../features/video/videoReducer";
import { HistoryReducer } from "../features/history/slice";

const rootReducer = combineReducers({
    home : HomeReducer,
    channel: ChannelReducer,
    video: VideoReducer,
    history: HistoryReducer,
});

export default rootReducer;