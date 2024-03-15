

interface VideoThumbnail {
    height: number;
    url: string;
    width: number;
  }
  
  interface VideoStats {
    views: number;
  }
  
  interface Video {
    badges: any[]; // Assuming we don't have a detailed structure for badges
    isLiveNow: boolean;
    lengthSeconds: number;
    movingThumbnails: null | string; // Adjusted based on your actual data needs, null here as placeholder
    publishedTimeText: string;
    stats: VideoStats;
    thumbnails: VideoThumbnail[];
    title: string;
    videoId: string;
}
  
interface ContentItem {
type: string;
video: Video;
}
  
export interface DataStructure {
contents: ContentItem[];
cursorNext: null | string; // Adjusted based on your actual data needs, null here as placeholder
}
  
export const demoData: DataStructure =  {
    "contents": [
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 194,
                "movingThumbnails": null,
                "publishedTimeText": "1 month ago",
                "stats": {
                    "views": 5725900
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/jjiC7PfoIaY\/hq720.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB9tmvIGbWmzA_FTFh2Kdt98gDpbQ",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/jjiC7PfoIaY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCVXx3ArLKtnOZQFh-lP24FRIkVNg",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/jjiC7PfoIaY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlikPYYEJgE3Q-EwPnHXFz6awlJA",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/jjiC7PfoIaY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqhOcR2cbNwAOgA5WfK4tYMX_59w",
                        "width": 336
                    }
                ],
                "title": "Shubh - Hood Anthem (Official Music Video)",
                "videoId": "jjiC7PfoIaY"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 154,
                "movingThumbnails": null,
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 12675808
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/Y5HIqjf3rek/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCDrTrG_8QlN2eZX77rpXTxnXZg9w",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/Y5HIqjf3rek/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA3H2ItZPgPNsrJ_FpW144NJC6t9w",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/Y5HIqjf3rek/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdHPtfUqHtWzIjMpMjMZRYvsm95w",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/Y5HIqjf3rek/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmD4f3RxLE_m9OiNhXgskdvn8LJg",
                        "width": 336
                    }
                ],
                "title": "Shubh - Safety Off (Official Music Video)",
                "videoId": "Y5HIqjf3rek"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 228,
                "movingThumbnails": null,
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 49325128
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/d2ofxg8pHfQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBbHQkg7w2YwTWpyJ-VegzA-I6x3g",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/d2ofxg8pHfQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCrYUXId_sT6H3Ej9yOALAvcP-3nQ",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/d2ofxg8pHfQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArN6jiGs94Ph0AJX1K0296yjKR2A",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/d2ofxg8pHfQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBigj50Uq3m00B655FtqjcdDNo-zQ",
                        "width": 336
                    }
                ],
                "title": "Shubh - King Shit (Official Audio)",
                "videoId": "d2ofxg8pHfQ"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 171,
                "movingThumbnails": null,
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 19986527
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/IAvw60x0Kn4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDySsFQEaWx1aZxDyI5YC4naGGBWg",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/IAvw60x0Kn4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBi2H1URhQ1_s_s16vLI2veSjH3qQ",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/IAvw60x0Kn4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBT9DNLoiQqDQn7mw77G3JaN9sKNQ",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/IAvw60x0Kn4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyxbMyqvJgQ_f4E98uca4i72kpwg",
                        "width": 336
                    }
                ],
                "title": "Shubh - You and Me (Official Audio)",
                "videoId": "IAvw60x0Kn4"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 194,
                "movingThumbnails": null,
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 4210109
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/EWlQVvCX8y0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCl64pcd-SCwDUCOxkh27TIoB_p2g",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/EWlQVvCX8y0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBb6jSB3mdKpLRb-Zse_w8nH-6dqg",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/EWlQVvCX8y0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASlogaWmOTbkZahZyAczbr5oWnVw",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/EWlQVvCX8y0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLazpI5RQ021kF7qPIt-7LUX1Wbw",
                        "width": 336
                    }
                ],
                "title": "Shubh - Hood Anthem (Official Audio)",
                "videoId": "EWlQVvCX8y0"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 144,
                "movingThumbnails": null,
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 4903807
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/LjfY3qSTBQc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDKLQeRKFauzXtmN5Iak_nJQ2W88A",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/LjfY3qSTBQc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCzJpW4kSsMceyUH6xP-KbnkNbEig",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/LjfY3qSTBQc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl109ENHoo9tswTQ5O-kJHBSf-LQ",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/LjfY3qSTBQc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxL3UP4AXCykE503ylPclvM5J_xQ",
                        "width": 336
                    }
                ],
                "title": "Shubh - Safety Off (Official Audio)",
                "videoId": "LjfY3qSTBQc"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 160,
                "movingThumbnails": null,
                "publishedTimeText": "6 months ago",
                "stats": {
                    "views": 92208824
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/0pWsCiBvLOk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJT3O-Zvi_XzJ4NQ4NZFqG8nrnSA",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/0pWsCiBvLOk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYG4iQJznhM2AxO9LGBnWgY3gqvg",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/0pWsCiBvLOk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpQi6oZNCYQRpXmzSrcdeIBUH7jg",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/0pWsCiBvLOk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTJgOtk5UEhiG6uZTDnAHIjH73mQ",
                        "width": 336
                    }
                ],
                "title": "Shubh - One Love (Official Audio)",
                "videoId": "0pWsCiBvLOk"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 83,
                "movingThumbnails": null,
                "publishedTimeText": "7 months ago",
                "stats": {
                    "views": 1982747
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/bJfI6x1obEg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCQUsjCfDgaCw04rT1sIQubv6ON0w",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/bJfI6x1obEg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBw-6wEbz1kZPU-YkBVb37IcmD1ig",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/bJfI6x1obEg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4Bacgq60iHlUEEpoXTE_evZridQ",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/bJfI6x1obEg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWRKu9yktok2njTRYejUlP_UtfsQ",
                        "width": 336
                    }
                ],
                "title": "See you soon…",
                "videoId": "bJfI6x1obEg"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 189,
                "movingThumbnails": null,
                "publishedTimeText": "7 months ago",
                "stats": {
                    "views": 185583198
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/4tywp83zkmk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBv8HtnvQIFkc37xtL2-UdzaEjWbg",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/4tywp83zkmk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCGW1513yXVa-SV3n7ZnbaUchh9jw",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/4tywp83zkmk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdOUSbZ-qrAVNP_2EmFhQwilQBcg",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/4tywp83zkmk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAWeNHgyjm1Vs2kOaUIW-vJSQGTQ",
                        "width": 336
                    }
                ],
                "title": "Shubh - Cheques (Official Music Video)",
                "videoId": "4tywp83zkmk"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 149,
                "movingThumbnails": null,
                "publishedTimeText": "7 months ago",
                "stats": {
                    "views": 23049132
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/vyrPwLoIYkc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDfuj9ZI6l_wbyYnM9Rp4nmfKs4Qw",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/vyrPwLoIYkc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDyMtUNW4xNgkfp20HT3lxot1BPCg",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/vyrPwLoIYkc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBw1MBQZ-OpfgQrFGhHsMc7WeMQLA",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/vyrPwLoIYkc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyHoTsQemN9f0APx1-Y3WvNy_rag",
                        "width": 336
                    }
                ],
                "title": "Shubh - Dior (Official Music Video)",
                "videoId": "vyrPwLoIYkc"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 201,
                "movingThumbnails": null,
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 16337521
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/oUOdKwzuvX0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWmaIsv6oPObi3EUhxSz6cY6iYBA",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/oUOdKwzuvX0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBwPszgOQt1exIPavolLyDN-wDjzg",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/oUOdKwzuvX0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQCSdSVKQA3kynbqOzp4qpOMB4ZQ",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/oUOdKwzuvX0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHzG8gVHasuKLcmhQZRp1N-H3UWA",
                        "width": 336
                    }
                ],
                "title": "Shubh - OG (Official Music Video)",
                "videoId": "oUOdKwzuvX0"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 172,
                "movingThumbnails": null,
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 73669161
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/0mCVpUDCkEk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAAMk2jCE9cmSJYVUyu-KqvC5CDHg",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/0mCVpUDCkEk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLATx_ocxsK0In9DDQSMrzEJIdV7Xg",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/0mCVpUDCkEk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8FKwe5Fs-ImbC3O_51czpR0D2zw",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/0mCVpUDCkEk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_oxr7-mZY6A-upcLssIjXBiw0QQ",
                        "width": 336
                    }
                ],
                "title": "Shubh - Still Rollin (Official Music Video)",
                "videoId": "0mCVpUDCkEk"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 175,
                "movingThumbnails": null,
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 5836518
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/xOeniWOjA3M/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgRigwMA8=&rs=AOn4CLDrDfxUsNeTR2YbqagGdT_zqJziOQ",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/xOeniWOjA3M/hqdefault.jpg?sqp=-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgRigwMA8=&rs=AOn4CLDplRFZcJwe97VqaIfehBp_0olzuQ",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/xOeniWOjA3M/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoMDAP&rs=AOn4CLDvZyjana9q2r5Vph8yEsO28YF5_Q",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/xOeniWOjA3M/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoMDAP&rs=AOn4CLBHj4KQIb0zQfNDPXDNgwYnLiJd8g",
                        "width": 336
                    }
                ],
                "title": "Shubh - Ice (Official Audio)",
                "videoId": "xOeniWOjA3M"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 184,
                "movingThumbnails": null,
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 42596820
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/DAqxAqq_jhg/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgRSgsMA8=&rs=AOn4CLDz5pqBQgP65K7icH6mIt8yRtDNHg",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/DAqxAqq_jhg/hqdefault.jpg?sqp=-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgRSgsMA8=&rs=AOn4CLBUn8MwVE49va1y_c_IRYTFLTOpPA",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/DAqxAqq_jhg/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEUoLDAP&rs=AOn4CLAleT6_JhrdXfvR5eX9T_lWGf4Q_Q",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/DAqxAqq_jhg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEUoLDAP&rs=AOn4CLCkqUqHd0U8Y7TG-P1zcH96WRw2cw",
                        "width": 336
                    }
                ],
                "title": "Shubh - Cheques (Official Audio)",
                "videoId": "DAqxAqq_jhg"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 198,
                "movingThumbnails": null,
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 2773488
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/FxoBzZhEdjo/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgRigwMA8=&rs=AOn4CLAGFjcvO-iN_RtKnQj1Pexe-5FvzQ",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/FxoBzZhEdjo/hqdefault.jpg?sqp=-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgRigwMA8=&rs=AOn4CLB_sziduS4BL0UN21d7h4AWbTk8uA",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/FxoBzZhEdjo/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoMDAP&rs=AOn4CLA_kU04_PMPavqzslUz12fklfTRyw",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/FxoBzZhEdjo/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoMDAP&rs=AOn4CLBHK2N9TS22t8M___Tvcg8H0V29ow",
                        "width": 336
                    }
                ],
                "title": "Shubh - OG (Official Audio)",
                "videoId": "FxoBzZhEdjo"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 205,
                "movingThumbnails": null,
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 3044672
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/KaZRiIsQjhM/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgUCg5MA8=&rs=AOn4CLCIHud7MTDGmyKO3z4oODS7LnKP_g",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/KaZRiIsQjhM/hqdefault.jpg?sqp=-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgUCg5MA8=&rs=AOn4CLAlGbPaQAdQlujLBR1TfAVHU9WNRQ",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/KaZRiIsQjhM/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFAoOTAP&rs=AOn4CLB-_nHDWQAHD7a0nfvTCTEjceNsJw",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/KaZRiIsQjhM/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFAoOTAP&rs=AOn4CLApk9xuOBRXgJg20mPcaI_2KfoaKg",
                        "width": 336
                    }
                ],
                "title": "Shubh - Ruthless (Official Audio)",
                "videoId": "KaZRiIsQjhM"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 140,
                "movingThumbnails": null,
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 3467049
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/SeC91H4nWCk/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgTig5MA8=&rs=AOn4CLBuENTNEgeM0NFlDUM3W-r59voRqw",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/SeC91H4nWCk/hqdefault.jpg?sqp=-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgTig5MA8=&rs=AOn4CLDl_kZRe1OFk7JDhtLV20mLOKJqSg",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/SeC91H4nWCk/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIE4oOTAP&rs=AOn4CLDvkitt0FyQjAGNtHyOSjpxxVf6ew",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/SeC91H4nWCk/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIE4oOTAP&rs=AOn4CLCrB5lDZjKif488azg-Xg56YepCwg",
                        "width": 336
                    }
                ],
                "title": "Shubh - Dior (Official Audio)",
                "videoId": "SeC91H4nWCk"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 174,
                "movingThumbnails": null,
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 1890109
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/FJm2CR1o_hI/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgRigwMA8=&rs=AOn4CLAfihvalvd8E2vnNUfE-l0Y-AzPMA",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/FJm2CR1o_hI/hqdefault.jpg?sqp=-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgRigwMA8=&rs=AOn4CLAw4_8QaDokya2foK03BvAPjLW07w",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/FJm2CR1o_hI/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoMDAP&rs=AOn4CLB0Ds7f5lKcC7FFGb3GKPES5dfyCQ",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/FJm2CR1o_hI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoMDAP&rs=AOn4CLA6AMY-uq6NSzrXtY8x9tGVQrRU-g",
                        "width": 336
                    }
                ],
                "title": "Shubh - The Flow (Official Audio)",
                "videoId": "FJm2CR1o_hI"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 62,
                "movingThumbnails": null,
                "publishedTimeText": "10 months ago",
                "stats": {
                    "views": 1074518
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/IrzowkE4h1w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAwLnTWeIDuM3orPc0oTcgXPDRsnA",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/IrzowkE4h1w/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCuU0qXX0ybusaXx0vg_-qLjJzaLQ",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/IrzowkE4h1w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU3w7m5GCTF6MpewLcVY4L__bxrQ",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/IrzowkE4h1w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8wUW0r02AQucrXfJcPp9OzflI6g",
                        "width": 336
                    }
                ],
                "title": "Shubh - Still Rollin (Official Album Trailer)",
                "videoId": "IrzowkE4h1w"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 155,
                "movingThumbnails": null,
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 22717577
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/eD3TP-C3nYE/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGGUgWig3MA8=&rs=AOn4CLDMUFhQ8KkP1isWGM-eP0xh-_263g",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/eD3TP-C3nYE/hqdefault.jpg?sqp=-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGGUgWig3MA8=&rs=AOn4CLDfuBcB6AyjalDBe8JZwMCUdEG_9Q",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/eD3TP-C3nYE/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFooNzAP&rs=AOn4CLBTU9Kz-KUfFTv9NwiHeMw1oQZg9g",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/eD3TP-C3nYE/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFooNzAP&rs=AOn4CLANxuRclhDHvfZojOADSanFwllUpw",
                        "width": 336
                    }
                ],
                "title": "Her (Official Audio) - Shubh",
                "videoId": "eD3TP-C3nYE"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 154,
                "movingThumbnails": null,
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 92666088
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/xR3V5Ow2dTI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLACzvWp_jxQxj9Ix-mHNGfXjfdbXw",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/xR3V5Ow2dTI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCArnMY48Z2ZD6xiHz7eBxFJWkaaQ",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/xR3V5Ow2dTI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmhvjAXUdPAYGGR4CGslNZ1apIYg",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/xR3V5Ow2dTI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4Y-bU76opTfy1Uv3C-1C7rzFJNg",
                        "width": 336
                    }
                ],
                "title": "Shubh - Baller (Official Music Video)",
                "videoId": "xR3V5Ow2dTI"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 230,
                "movingThumbnails": null,
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 106794817
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/I1nX5EuvwzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAyu8VEDuVNkPT6fyRQoCLDjQD7DA",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/I1nX5EuvwzE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB39-Ph_Wz-d78rF4o38BxNEFvg1g",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/I1nX5EuvwzE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9lwD0OBu4AvNVNqc5biDSYIuYRw",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/I1nX5EuvwzE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-lFyrIm60iiQsRfyFrcnADDW5hQ",
                        "width": 336
                    }
                ],
                "title": "Shubh - Elevated (Official Music Video)",
                "videoId": "I1nX5EuvwzE"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 171,
                "movingThumbnails": null,
                "publishedTimeText": "2 years ago",
                "stats": {
                    "views": 196431982
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/6RrEQJNZwPQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDuyOQ2eaei8FP-ekOB47ztq5FAMA",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/6RrEQJNZwPQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJOiqwtWEE1as-3l_eeCWgvYos9w",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/6RrEQJNZwPQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIK7nB1sSvewbetBOm3TAKhG1pAQ",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/6RrEQJNZwPQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0NCQ_6jxJgsYQyOrQ9GuE-DfJ3g",
                        "width": 336
                    }
                ],
                "title": "No Love (Official Audio) - Shubh",
                "videoId": "6RrEQJNZwPQ"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 215,
                "movingThumbnails": null,
                "publishedTimeText": "2 years ago",
                "stats": {
                    "views": 106103560
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/hV8EGTjzD2s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBjVNU3iBm7OqworFx_Nk6X6d8bcw",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/hV8EGTjzD2s/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCsQxem0NaC0odRUb-1f4Y7bd-n7Q",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/hV8EGTjzD2s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAjHTSItFYmGpOhmpvBzffK0Vq3w",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/hV8EGTjzD2s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARGIZIxAlUfn70llIgg0kHabSBIQ",
                        "width": 336
                    }
                ],
                "title": "We Rollin (Official Video) - Shubh | Rubbal GTR",
                "videoId": "hV8EGTjzD2s"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 172,
                "movingThumbnails": null,
                "publishedTimeText": "2 years ago",
                "stats": {
                    "views": 24282003
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/ixgaS-3FfK4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAD-owR-Mi5XvOAUpXPPgvS3KxqYw",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/ixgaS-3FfK4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCTV9lu4q6tdZUzEFzVlFoaHPgaRg",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/ixgaS-3FfK4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBw_jujottLf9hgnd53zVva5H4OQQ",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/ixgaS-3FfK4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdMk7pZb0_qPvRpPDfq_qhCJsqdA",
                        "width": 336
                    }
                ],
                "title": "Offshore (Official Audio) - Shubh",
                "videoId": "ixgaS-3FfK4"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 201,
                "movingThumbnails": null,
                "publishedTimeText": "2 years ago",
                "stats": {
                    "views": 78301303
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/9CvwbW9UhJc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBfiK7APKx0pcPgWrNPHGOdKGX4aA",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/9CvwbW9UhJc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcp-gc3Yp4TuxZMSeoGBuYlt8jmQ",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/9CvwbW9UhJc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3iF3sgbDMFa6OY1lOOCxbtxz1AA",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/9CvwbW9UhJc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYBrX5zKg_-2IuY7BnL_-y44E01w",
                        "width": 336
                    }
                ],
                "title": "Elevated (Official Audio) - Shubh",
                "videoId": "9CvwbW9UhJc"
            }
        },
        {
            "type": "video",
            "video": {
                "badges": [],
                "isLiveNow": false,
                "lengthSeconds": 199,
                "movingThumbnails": null,
                "publishedTimeText": "2 years ago",
                "stats": {
                    "views": 227192321
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/RLhuPD2ASKE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABrASebPmyC5ErTlr9aXw5k_rmmQ",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/RLhuPD2ASKE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAoOtOSHPrWRPwKjD1p1nuoplW3jA",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/RLhuPD2ASKE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGQFeRQCK0q6OkGogMtFqkiB4MgQ",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/RLhuPD2ASKE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5P5UbahC2U00LormMdDLcbA7pjA",
                        "width": 336
                    }
                ],
                "title": "We Rollin (Official Audio) - Shubh",
                "videoId": "RLhuPD2ASKE"
            }
        }
    ],
    "cursorNext": null
}