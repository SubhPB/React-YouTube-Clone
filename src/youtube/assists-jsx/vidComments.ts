export interface Avatar {
    height: number;
    url: string;
    width: number;
}
  
 interface Badge {
    text: string;
    type: string;
}
  
export interface Author {
    avatar: Avatar[];
    badges: Badge[];
    channelId ?: string | null;
    isChannelOwner?: boolean | null;
    title?: string | null;
}
  
export interface Pinned {
    status: boolean;
    text: string | null;
}
  
export interface Stats {
    replies: number;
    votes: number;
}
  
export interface Comment {
    author: Author;
    commentId: string | null;
    content: string | null;
    creatorHeart: boolean;
    cursorReplies: string | null;
    pinned ?: Pinned;
    publishedTimeText ?: string | null;
    stats: Stats;
    paid ?: any
}
  
export interface CommentsSection {
    comments: Comment[];
    cursorNext: string;
    filters: Filter[];
    totalCommentsCount: number;
}
  
export interface Filter {
    cursorFilter: string;
    selected: boolean;
    title: string;
}
  