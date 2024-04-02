import React from "react";
import { Avatar } from "../../assists-jsx/apiInterfaces";
import { Badge } from "../../assists-jsx/apiInterfaces";

  
export interface BannerImage {
  height: number;
  url: string;
  width: number;
}
  
export interface Banner {
  desktop: BannerImage[];
  mobile: BannerImage[];
  tv: BannerImage[];
}

  
export interface Link {
  icon: BannerImage[];
  targetUrl: string;
  title: string;
}
  
export interface Stats {
  subscribers: number;
  subscribersText: string;
  views: number;
  videos ?: number;
  videosText ?: string;

}
  
export interface Data {
  artistBio: null | string;
  avatar: Avatar[];
  badges: Badge[];
  banner: Banner;
  canonicalBaseUrl: string;
  channelId: string;
  country: null | string;
  description: string;
  hasBusinessEmail: boolean;
  joinedDate: string;
  joinedDateText: string;
  keywords: string[];
  links: Link[];
  stats: Stats;
  title: string;
  username ?: string
}

export interface ChnlProp<SRC> {
  className ?: string,
  xtraCss ?: string,
  onClick ?: Function,
  children ?: React.ReactNode,
  src ?: SRC
  isLoading ?: boolean,
  callBackFunc ?: Function,
  ChnlData ?: Data | undefined,
  query ?: string |undefined
};
  
export const data: Data = {
    "artistBio": "Ermias Joseph Asghedom, known professionally as Nipsey Hussle, was an American rapper, entrepreneur, and activist. Emerging from the West Coast hip hop scene in the mid-2000s, Hussle independently released his debut mixtape, Slauson Boy Volume 1, to moderate local success, which led to him being signed to Cinematic Music Group and Epic Records.\nHussle became known for his numerous mixtapes, including his Bullets Ain't Got No Name series, The Marathon, The Marathon Continues, and Crenshaw, the last of which American rapper Jay-Z bought 100 copies for $100 each. After much delay, his debut studio album Victory Lap was released in 2018 to critical acclaim and commercial success, and was nominated for the Best Rap Album at the 61st Grammy Awards in 2019. At the 62nd Grammy Awards in 2020, two posthumous Grammy Awards for the songs \"Racks in the Middle\" and \"Higher\" were awarded to Hussle in the Best Rap Performance and Best Rap/Sung Performance categories respectively.",
    "avatar": [
        {
            "height": 48,
            "url": "https://yt3.googleusercontent.com/ytc/AIdro_n5lwy4-BagKkauq33dYp00gg8qsjCZA5qmSwiP0Q=s48-c-k-c0x00ffffff-no-rj",
            "width": 48
        },
        {
            "height": 88,
            "url": "https://yt3.googleusercontent.com/ytc/AIdro_n5lwy4-BagKkauq33dYp00gg8qsjCZA5qmSwiP0Q=s88-c-k-c0x00ffffff-no-rj",
            "width": 88
        },
        {
            "height": 176,
            "url": "https://yt3.googleusercontent.com/ytc/AIdro_n5lwy4-BagKkauq33dYp00gg8qsjCZA5qmSwiP0Q=s176-c-k-c0x00ffffff-no-rj",
            "width": 176
        }
    ],
    "badges": [
        {
            "text": "Official Artist Channel",
            "type": "OFFICIAL_ARTIST_CHANNEL"
        }
    ],
    "banner": {
        "desktop": [
            {
                "height": 175,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                "width": 1060
            },
            {
                "height": 188,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                "width": 1138
            },
            {
                "height": 283,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                "width": 1707
            },
            {
                "height": 351,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                "width": 2120
            },
            {
                "height": 377,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                "width": 2276
            },
            {
                "height": 424,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                "width": 2560
            }
        ],
        "mobile": [
            {
                "height": 88,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w320-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                "width": 320
            },
            {
                "height": 175,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w640-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                "width": 640
            },
            {
                "height": 263,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w960-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                "width": 960
            },
            {
                "height": 351,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w1280-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                "width": 1280
            },
            {
                "height": 395,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                "width": 1440
            }
        ],
        "tv": [
            {
                "height": 180,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w320-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                "width": 320
            },
            {
                "height": 480,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w854-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                "width": 854
            },
            {
                "height": 720,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w1280-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                "width": 1280
            },
            {
                "height": 1080,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w1920-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                "width": 1920
            },
            {
                "height": 1192,
                "url": "https://yt3.googleusercontent.com/BQTOt7ISwrVQyEMYoeM8tPXR1l9GQ8wogyvMgN0w41QL6-fitqA5zE7Ue3yIzXnRvUNjMcn9qg=w2120-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                "width": 2120
            }
        ]
    },
    "canonicalBaseUrl": "/@NipseyHussle-gg8le",
    "channelId": "UCm1s2VS9BdyXL9FU4a-W_cQ",
    "country": "United States",
    "description": "ALL MONEY IN",
    "hasBusinessEmail": false,
    "joinedDate": "2017-09-20",
    "joinedDateText": "Joined Sep 20, 2017",
    "keywords": [
        "Nipsey Hussle",
        "Victory Lap",
        "The Marathon"
    ],
    "links": [
        {
            "icon": [
                {
                    "height": 16,
                    "url": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRFu0bxdRmqRC4u_MjM0fUuUio3zZaZkgsO6N7rQItlOq7JAD1HTnLauPsTM3rwMU07U8YTzXxdWT2LANRi1119Dq1HDTA6hxNLduVo2JEaaSH1847mwX5X",
                    "width": 16
                },
                {
                    "height": 256,
                    "url": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcSTeuuQooQs8v-vRrwXPPA78tSvFg4wVePbeDU6tn4gcXnMY5R7dGYoL7zeqoSY4obaJKvO2TVORzurqm7JCTrfTkRw6k1cHw9J_aNhTr30uwvdsdbU0kuSkQ",
                    "width": 256
                }
            ],
            "targetUrl": "https://NipseyHussle.lnk.to/RITMLY",
            "title": "RACKS IN THE MIDDLE"
        },
        {
            "icon": [
                {
                    "height": 16,
                    "url": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcQ5yfnNYWE1SjWg9aC3dn4iuXWk6Pc17wQHdEn8_Zs6ErFNUBoI_-8UhWvtyPT5u-JEvLlA8lXr6GLLKJnAmZhyZBCVTDKY54j_lvM7lOHa",
                    "width": 16
                },
                {
                    "height": 256,
                    "url": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcR4Wduo6eRx53oQpCfIIH7PzGLWjBSuIm5Rm8kWbj2XM1Q5zTu8S5ayln5WQh7sMC2edzQBdySPi93k_5ZnkFu100Ec1Ur4bfdwbK0DeUAr8w",
                    "width": 256
                }
            ],
            "targetUrl": "http://ihussle.com",
            "title": "WEBSITE"
        },
        {
            "icon": [
                {
                    "height": 16,
                    "url": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSfLSwm05yS0BK4Kb28e-NTcQAsNLQfDCkRW2BwGzQ_4QLgT3HvRwy5O9kLRnUU-QhzvJantOSGhq8NOQp7EHd_WEvUNR6WW1Pp0THXuSRzNiJgToeoCA",
                    "width": 16
                },
                {
                    "height": 256,
                    "url": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcRMnk5lytM1g9HJQSf7bM5Xfi4yFD5Vyri4jzLc1D4JUjmBYMab9mUK04YRfRwyHmDMutbz5OgS4cg_9Z2lEmyotPVb3TDyE7YkLlpC2ywK7bDnmpmQTRw",
                    "width": 256
                }
            ],
            "targetUrl": "https://www.instagram.com/nipseyhussle",
            "title": "IG"
        },
        {
            "icon": [
                {
                    "height": 16,
                    "url": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSxUwGjsJZApoUKonOfNzxpFkEMyf29jwvspkLH1CA-JP5Nx06tcApyuGcjdsPZWzHuoyTRot1jS2gOtE_pzWKSSaJg0t0MtrRw6u7ZcItl78fGxuhb",
                    "width": 16
                },
                {
                    "height": 256,
                    "url": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcQj6tFbIEZH6KkBEISjsbAGeqJk0h4_TtuseJEKTDKFj7cLXn9N9V5qe-N5r9QRJS0QYLqPUe6U800spJjOLJCjn8qQE-tbQGPjTE2PNKmCkI_gtwN2Aw",
                    "width": 256
                }
            ],
            "targetUrl": "https://www.facebook.com/nipseyhussle",
            "title": "FB"
        },
        {
            "icon": [
                {
                    "height": 16,
                    "url": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcTCl87OfLKVJ9rK8xDL2fO43Nn-qwO3MZqhD6Va_y_Dj4NQN5vi_7wfFsqVPVk5OJarybTLaqbvqdn3Oj1nmlMBa_srPR9cF0lTX47Loj-ftw",
                    "width": 16
                },
                {
                    "height": 256,
                    "url": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcR7q2fytXyQw1wkPBPrICHHjLvxWloPZ_FdHfbR2zGpa99E9USylFLC_kDnQZLg3VVWxgyroOpElcixupmf3lhA9h_npVzfaX-4a8C34EDX4VQ",
                    "width": 256
                }
            ],
            "targetUrl": "https://twitter.com/nipseyhussle",
            "title": "TW"
        }
    ],
    "stats": {
        "subscribers": 2780000,
        "subscribersText": "2.78M subscribers",
        "videos": 91,
        "videosText": "91 videos",
        "views": 1936423232
    },
    "title": "Nipsey Hussle",
    "username": "@NipseyHussle-gg8le"
}