/* -- BYIMAAN -> THE FUTURE -- */

import { ChnlCommunitySlice } from "./communitySlice";

export const fetchChnlCommunityAction = (channelId: string) => (
    ChnlCommunitySlice.fetchSliceData(`channel/community/?id=${channelId}`)
);
