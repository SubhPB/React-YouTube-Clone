export interface Avatar {
    height: number;
    url: string;
    width: number;
}
  
export interface Badge {
    text: string;
    type: string;
}

export interface Author {
    avatar: Avatar[];
    badges: Badge[];
    canonicalBaseUrl: string;
    channelId: string;
    title: string;
}

export interface MovingThumbnail {
    height: number;
    url: string;
    width: number;
}

export interface Stats {
    views: number;
}

export interface Thumbnail {
    height: number;
    url: string;
    width: number;
}

export interface Video {
    author: Author;
    badges: Badge[];
    isLiveNow: boolean;
    lengthSeconds: number;
    movingThumbnails: MovingThumbnail[];
    publishedTimeText: string;
    stats: Stats;
    thumbnails: Thumbnail[];
    title: string;
    videoId: string;
}

export interface Content {
    type: string;
    video: Video;
}

export interface ApiResponse {
    contents: Content[];
}


  