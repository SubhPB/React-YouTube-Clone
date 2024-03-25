/* -- BYIMAAN -> THE FUTURE -- */

import { ChnlSearchSlice } from "./searchSlice";

export const fetchChnlSearchAction = (channelId: string, searchQuery: string) => (
    ChnlSearchSlice.fetchSliceData(`channel/search/?id=${channelId}&q=${searchQuery}`)
);