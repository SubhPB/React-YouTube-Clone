export interface YouTubeCommentsData {
    comments: Comment[];
    cursorNext: string;
    filters: Filter[];
    totalCommentsCount: number;
}
  
export interface Comment {
    author: Author;
    commentId: string;
    content: string;
    creatorHeart: boolean;
    cursorReplies?: string;
    pinned: Pinned;
    publishedTimeText: string;
    stats: Stats;
}

export interface Author {
    avatar: Avatar[];
    badges: Badge[];
    channelId: string;
    isChannelOwner: boolean;
    title: string;
}

export interface Avatar {
    height: number;
    url: string;
    width: number;
}

export interface Badge {
    text?: string;
    type?: string;
}

export interface Pinned {
    status: boolean;
    text: null | string;
}

export interface Stats {
    replies: number;
    votes: number;
}

export interface Filter {
    cursorFilter: string;
    selected: boolean;
    title: string;
}
  



  