/* -- BYIMAAN -> THE FUTURE -- */

import { RelatedContentSlice } from "./slice";

export const fetchRelatedContentAction = (videoId: string) => (
    RelatedContentSlice.fetchSliceData(`video/related-contents/?id=${videoId}`)
);