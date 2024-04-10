/* -- BYIMAAN -> THE FUTURE -- */

import CustomSlice from "../../../shared/customSlice";
import { VideoDetailApiResponse } from "../../../../youtube/assists-jsx/videoDetailTs";

export const VideoDetailSlice = new CustomSlice<VideoDetailApiResponse>('video-details');

export default VideoDetailSlice.sliceReducer;