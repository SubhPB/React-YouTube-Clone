/* -- BYIMAAN -> THE FUTURE -- */

import CustomSlice from "../../../shared/customSlice";
import { Data } from "../../../../youtube/pages-jsx/channel-YT/ChannelTS";
export const ChnlDetailSlice = new CustomSlice<Data>('channel-details');

const ChnlDetailsReducer =  ChnlDetailSlice.sliceReducer;
export default ChnlDetailsReducer;