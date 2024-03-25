/* -- BYIMAAN -> THE FUTURE -- */

import { combineReducers } from "redux";
import HomeReducer from "../features/home/homeSlice";
import { ChannelReducer } from "../features/channel/channelReducer";
import { VideoReducer } from "../features/video/videoReducer";

const rootReducer = combineReducers({
    home : HomeReducer,
    channel: ChannelReducer,
    video: VideoReducer,
});

export default rootReducer;