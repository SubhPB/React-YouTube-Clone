export interface VideoData {
contents: Content[];
cursorNext: string;
didYouMean: null | string;
estimatedResults: number;
filterGroups: FilterGroup[];
refinements: string[];
}
  
export interface Content {
type: string;
video: Video;
}

export interface Video {
author: Author;
badges: string[];
descriptionSnippet: string;
isLiveNow: boolean;
lengthSeconds: number;
movingThumbnails: Thumbnail[];
publishedTimeText: string;
stats: Stats;
thumbnails: Thumbnail[];
title: string;
videoId: string;
}

export interface Author {
avatar: Avatar[];
badges: Badge[];
canonicalBaseUrl: null | string;
channelId: string;
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

export interface Thumbnail {
height: number;
url: string;
width: number;
}

export interface Stats {
views: number;
}

export interface FilterGroup {
filters: Filter[];
title: string;
}

export interface Filter {
cursorSelect: string;
label: string;
selected: boolean;
}
  