/* -- BYIMAAN -> THE FUTURE -- */

import { combineReducers } from "redux";
import ChnlCommunityReducer from "./chnlCommunity/communitySlice";


export const ChannelReducer = combineReducers({
    community: ChnlCommunityReducer,
});
