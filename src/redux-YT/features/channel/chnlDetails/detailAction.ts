/* -- BYIMAAN -> THE FUTURE -- */

import { ChnlDetailSlice } from "./detailSlice";

export const fetchChnlDetailsAction = (channelId : string) => (
    ChnlDetailSlice.fetchSliceData(`channel/details/?id=${channelId}`)
)