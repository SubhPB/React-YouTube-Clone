/* -- BYIMAAN -> THE FUTURE -- */

import { combineReducers } from "redux";
import ChnlCommunityReducer from "./chnlCommunity/communitySlice";
import ChnlHomeReducer from "./chnlHome/homeSlice";
import ChnlSearchReducer from "./chnlSearch/searchSlice";
import ChnlDetailsReducer from "./chnlDetails/detailSlice";
import { SubcribeReducer } from "./subcriptions/slice";

export const ChannelReducer = combineReducers({
    home: ChnlHomeReducer,
    community: ChnlCommunityReducer,
    search: ChnlSearchReducer,
    details: ChnlDetailsReducer,
    subcription: SubcribeReducer
});
