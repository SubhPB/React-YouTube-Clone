/* -- BYIMAAN -> THE FUTURE -- */

import {VideoDetailSlice} from './slice';

export const fetchVideoDetailsAction = (videoId: string) => (
    VideoDetailSlice.fetchSliceData(`video/details/?id=${videoId}`)
)