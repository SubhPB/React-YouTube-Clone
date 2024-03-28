export enum StatusTs {
    LIKED= 'LIKED',
    DISLIKE= 'DISLIKED',
    NEUTRAL= 'NEUTRAL',
};

export interface Comment {
    [commentId: string] : {
        status: StatusTs,
        data: string
    }; 
}

export interface VideoDataTs {
    [videoId : string] : {
        status : StatusTs,
        myComments: Comment[];
    };
};

export interface IdActionType {
    id: string
};