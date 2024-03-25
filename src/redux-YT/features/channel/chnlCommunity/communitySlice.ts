/* -- BYIMAAN -> THE FUTURE -- */

import CustomSlice from "../../../shared/customSlice";
import { DataStructure } from "../../../../youtube/pages-jsx/channel-YT/ChannelVideo";

export const ChnlCommunitySlice = new CustomSlice<DataStructure>('channel-community');

const ChnlCommunityReducer =  ChnlCommunitySlice.sliceReducer;
export default ChnlCommunityReducer;