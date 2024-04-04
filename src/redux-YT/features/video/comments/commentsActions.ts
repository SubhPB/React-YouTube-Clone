/* -- BYIMAAN -> THE FUTURE -- */
//const { data, error, isLoading } = useFetch<CommentsSection>(`video/comments/?id=${videoId}`, [videoId] );


import { CommentsSlice } from "./commentsSlice"

export const fetchCVideoCommentsAction = ( videoId : string) => (
    CommentsSlice.fetchSliceData(`video/comments/?id=${videoId}`)
);



