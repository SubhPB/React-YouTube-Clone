/* -- BYIMAAN -> THE FUTURE -- */

import { ChnlHomeSlice } from "./homeSlice";

export const fetchChnlHomeAction = (channelId: string) => (
    ChnlHomeSlice.fetchSliceData(`channel/videos/?id=${channelId}`)
)