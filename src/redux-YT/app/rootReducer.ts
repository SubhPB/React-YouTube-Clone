/* -- BYIMAAN -> THE FUTURE -- */

import { combineReducers } from "redux";
import HomeReducer from "../features/home/homeSlice";
import { ChannelReducer } from "../features/channel/channelReducer";
import { VideoReducer } from "../features/video/videoReducer";
import { HistoryReducer } from "../features/history/slice";
import ApiErrorReducer from '../features/error/slice';
import ApiReducer from '../features/api/slice';

const rootReducer = combineReducers({
    api: ApiReducer,
    home : HomeReducer,
    channel: ChannelReducer,
    video: VideoReducer,
    history: HistoryReducer,
    apiError: ApiErrorReducer,
});

export default rootReducer;