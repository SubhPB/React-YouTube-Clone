/* -- BYIMAAN -> THE FUTURE -- */

import CustomSlice from "../../../shared/customSlice";
import { CommentsSection } from "../../../../youtube/assists-jsx/vidComments";

export const CommentsSlice = new CustomSlice<CommentsSection>('video-comments');

export default CommentsSlice.sliceReducer;