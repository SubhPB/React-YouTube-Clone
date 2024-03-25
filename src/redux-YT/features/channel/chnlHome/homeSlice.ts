/* -- BYIMAAN -> THE FUTURE -- */

import CustomSlice from "../../../shared/customSlice";
import { ApiResponse } from "../../../../youtube/assists-jsx/apiInterfaces";

export const ChnlHomeSlice = new CustomSlice<ApiResponse>('channel-home');

const ChnlHomeReducer =  ChnlHomeSlice.sliceReducer;
export default ChnlHomeReducer;