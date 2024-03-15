

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
    avatar?: Avatar[];
    badges?: Badge[];
    canonicalBaseUrl?: string | null;
    channelId?: string;
    title?: string;
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
    author?: Author;
    badges?: string[];
    isLiveNow: boolean;
    lengthSeconds?: number;
    movingThumbnails?: MovingThumbnail[] | null;
    publishedTimeText?: string;
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
    cursorNext ?: string;
    didYouMean ?: null | string;
    estimatedResults ?: number;
    filterGroups ?: FilterGroup[];
    refinements ?: string[];
};

export interface FilterGroup {
    filters: Filter[];
    title: string;
};
    
export interface Filter {
    cursorSelect: string;
    label: string;
    selected: boolean;
};
  