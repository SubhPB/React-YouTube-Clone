import { Comment } from "../../../../youtube/assists-jsx/vidComments";

export enum StatusTs {
    LIKED= 'LIKED',
    DISLIKE= 'DISLIKED',
    NEUTRAL= 'NEUTRAL',
};

export interface VideoDataTs {
    [videoId : string] : {
        status : StatusTs,
        myComments: Comment[];
    };
};

export interface IdActionType {
    id: string
};

export interface AddCommentAction extends IdActionType{
    content: string | null ;
}

export interface delCommentAction extends IdActionType {
    commentId: string,
}