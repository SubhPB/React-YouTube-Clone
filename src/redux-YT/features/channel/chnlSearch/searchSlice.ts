/* -- BYIMAAN -> THE FUTURE -- */

import CustomSlice from "../../../shared/customSlice";
import { ApiResponse } from "../../../../youtube/assists-jsx/apiInterfaces";

export const ChnlSearchSlice = new CustomSlice<ApiResponse>('channel-search');

const ChnlSearchReducer =  ChnlSearchSlice.sliceReducer;
export default ChnlSearchReducer;