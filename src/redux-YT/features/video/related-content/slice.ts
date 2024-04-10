/* -- BYIMAAN -> THE FUTURE -- */

import CustomSlice from "../../../shared/customSlice";
import { ApiResponse } from "../../../../youtube/assists-jsx/apiInterfaces";

export const RelatedContentSlice = new CustomSlice<ApiResponse>('video-related-content');

export default RelatedContentSlice.sliceReducer;