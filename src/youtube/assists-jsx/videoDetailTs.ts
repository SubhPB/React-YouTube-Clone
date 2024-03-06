/* -- BYIMAAN -> THE FUTURE -- */

export interface VideoDetailApiResponse {
    author: Author;
    cards: Card[];
    category: string;
    description: string;
    endScreen: EndScreen;
    isLiveContent: boolean;
    keywords: string[];
    lengthSeconds: number;
    musics: Music[][];
    publishedDate: string;
    stats: Stats;
    superTitle: SuperTitle;
    thumbnails: Thumbnail[];
    title: string;
    videoId: string;
  }
  
  export interface Author {
    avatar: Avatar[];
    badges: Badge[];
    canonicalBaseUrl: string;
    channelId: string;
    stats: AuthorStats;
    title: string;
  }
  
  export interface Avatar {
    height: number;
    url: string;
    width: number;
  }
  
  export interface Badge {
    text: string;
    type: string;
  }
  
  export interface AuthorStats {
    subscribers: number;
    subscribersText: string;
  }
  
  export interface Card {
    label: string;
    link?: Link;
    type: string;
    video?: Video;
  }
  
  export interface Link {
    displayDomain: string;
    thumbnails: Thumbnail[];
    title: string;
    url: string;
  }
  
  export interface Thumbnail {
    height: number;
    url: string;
    width: number;
  }
  
  export interface Video {
    lengthSeconds: number;
    stats: VideoStats;
    thumbnails: Thumbnail[];
    title: string;
    videoId: string;
  }
  
  export interface VideoStats {
    views: number;
  }
  
  export interface EndScreen {
    items: EndScreenItem[];
  }
  
  export interface EndScreenItem {
    channel?: EndScreenChannel;
    type: string;
    playlist?: Playlist;
    video?: Video;
  }
  
  export interface EndScreenChannel {
    avatar: Avatar[];
    channelId: string;
    description: string;
    title: string;
  }
  
  export interface Playlist {
    playlistId: string;
    stats: PlaylistStats;
    thumbnails: Thumbnail[];
    title: string;
  }
  
  export interface PlaylistStats {
    videos: number;
  }
  
  export interface Music {
    title: string;
    value: string;
  }
  
  export interface Stats {
    comments: number;
    likes: number;
    views: number;
  }
  
  export interface SuperTitle {
    items: string[];
  }
  