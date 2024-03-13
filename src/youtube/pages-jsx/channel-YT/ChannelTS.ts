import React from "react";

export interface Avatar {
    height: number;
    url: string;
    width: number;
  }
  
  export interface Badge {
    text: string;
    type: string;
  }
  
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
    icon: string[];
    targetUrl: string;
    title: string;
  }
  
  export interface Stats {
    subscribers: number;
    subscribersText: string;
    views: number;
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
}

export interface ChnlProp<SRC> {
  className ?: string,
  xtraCss ?: string,
  onClick ?: Function,
  children ?: React.ReactNode,
  src ?: SRC
  isLoading ?: boolean,
};
  
export const data: Data = {
    "artistBio": null,
    "avatar": [
      {
        "height": 48,
        "url": "https://yt3.ggpht.com/ytc/AKedOLQhW5ilWNDmw4kpwrVc899jT-sx0AJjg5pZJVpqbGY=s48-c-k-c0x00ffffff-no-rj",
        "width": 48
      },
      {
        "height": 88,
        "url": "https://yt3.ggpht.com/ytc/AKedOLQhW5ilWNDmw4kpwrVc899jT-sx0AJjg5pZJVpqbGY=s88-c-k-c0x00ffffff-no-rj",
        "width": 88
      },
      {
        "height": 176,
        "url": "https://yt3.ggpht.com/ytc/AKedOLQhW5ilWNDmw4kpwrVc899jT-sx0AJjg5pZJVpqbGY=s176-c-k-c0x00ffffff-no-rj",
        "width": 176
      }
    ],
    "badges": [
      {
        "text": "Verified",
        "type": "VERIFIED_CHANNEL"
      }
    ],
    "banner": {
      "desktop": [
        {
          "height": 175,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
          "width": 1060
        },
        {
          "height": 188,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
          "width": 1138
        },
        {
          "height": 283,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
          "width": 1707
        },
        {
          "height": 351,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
          "width": 2120
        },
        {
          "height": 377,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
          "width": 2276
        },
        {
          "height": 424,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
          "width": 2560
        }
      ],
      "mobile": [
        {
          "height": 88,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w320-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
          "width": 320
        },
        {
          "height": 175,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w640-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
          "width": 640
        },
        {
          "height": 263,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w960-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
          "width": 960
        },
        {
          "height": 351,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w1280-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
          "width": 1280
        },
        {
          "height": 395,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
          "width": 1440
        }
      ],
      "tv": [
        {
          "height": 180,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w320-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
          "width": 320
        },
        {
          "height": 480,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w854-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
          "width": 854
        },
        {
          "height": 720,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w1280-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
          "width": 1280
        },
        {
          "height": 1080,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w1920-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
          "width": 1920
        },
        {
          "height": 1192,
          "url": "https://yt3.ggpht.com/_qUjnd6iVb4pjy4F_kyL0IwUajCFmcuAHFKS4UKGQVgxBUrpgsOMXUwaBWI4I5GFtIH3Fk-LMQ=w2120-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
          "width": 2120
        }
      ]
    },
    "canonicalBaseUrl": "/c/WWE",
    "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
    "country": null,
    "description": "WWE on YouTube is your number one spot to catch WWE original shows and exclusives!\n\nWatch videos from all of your favorite WWE Superstars, backstage fallout from live shows including Raw, SmackDown, NXT and original shows such as Top 10, List This, WWE's The Bump and much more! \n\nSubscribe - https://goo.gl/2YO0Is\n\nStream WWE on Peacock https://pck.tv/2PIAQJI in the U.S. and on WWE Network http://wwe.yt/wwenetwork everywhere else.\n",
    "hasBusinessEmail": false,
    "joinedDate": "2007-05-10",
    "joinedDateText": "Joined May 10, 2007",
    "keywords": [
      "wrestling",
      "submission wrestling",
      "wwe",
      "व्यावसायिक कुश्ती",
      "professional wrestling",
      "مصارعة المحترفين",
      "الرياضة القتالية",
      "finishing moves",
      "चालें परिष्करण",
      "الانتهاء",
      "من",
      "التحركاتالانتهاء",
      "التحركات",
      "wrestler",
      "network",
      "Raw",
      "SmackDown",
      "WrestleMania",
      "SummerSlam"
    ],
    "links": [
      {
        "icon": [
          "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcR2Ly_siMJWnRW2XdwZLUxTiwlB4ctsmIm2YY-OWLOB-dBxxb3_BeqpkqbVcZpX52-O9dMEj7LvWBwVkppnyX6MYvYi--M0bnMCcB_G4iis1ueI2asbUA"
        ],
        "targetUrl": "https://www.peacocktv.com/sports/wwe?cid=2101sportswweprtnrgrmktyt1172&utm_campaign=2101sportswwe&utm_source=yt&utm_medium=prtnrgrmkt_yt_customcontent_aboutlink&utm_term=wwe&utm_content=wwechannel",
        "title": "WWE on Peacock"
      },
      {
        "icon": [
          "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcT7H1ONQ3rAUqi4TUEh9i-1CTF6Wpjx0mqi97NarEByH7id0B1kOddSAIFO0Tjsva1dtKRMgHZZ2MFPJMOao6UgWn48Yn2zpKyn1fKP1EgC"
        ],
        "targetUrl": "http://www.wwe.com/wwenetwork?utm_source=YouTube%20&utm_medium=YTannotation&utm_campaign=YouTubeBanner",
        "title": "WWE Network"
      },
      {
        "icon": [
          "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSxUwGjsJZApoUKonOfNzxpFkEMyf29jwvspkLH1CA-JP5Nx06tcApyuGcjdsPZWzHuoyTRot1jS2gOtE_pzWKSSaJg0t0MtrRw6u7ZcItl78fGxuhb"
        ],
        "targetUrl": "https://www.facebook.com/wwe",
        "title": "WWE on Facebook"
      },
      {
        "icon": [
          "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcTCl87OfLKVJ9rK8xDL2fO43Nn-qwO3MZqhD6Va_y_Dj4NQN5vi_7wfFsqVPVk5OJarybTLaqbvqdn3Oj1nmlMBa_srPR9cF0lTX47Loj-ftw"
        ],
        "targetUrl": "https://twitter.com/wwe",
        "title": "WWE on Twitter"
      },
      {
        "icon": [
          "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSfLSwm05yS0BK4Kb28e-NTcQAsNLQfDCkRW2BwGzQ_4QLgT3HvRwy5O9kLRnUU-QhzvJantOSGhq8NOQp7EHd_WEvUNR6WW1Pp0THXuSRzNiJgToeoCA"
        ],
        "targetUrl": "https://www.instagram.com/wwe/",
        "title": "WWE on Instagram"
      },
      {
        "icon": [
          "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSFlbYqhtyMeV1vHT8M_qebDgOkM3uyTo4Zp8HBUWXW1YlyzmlmYQKNUQmAbr90Xn8uCGL1KG3dZY__P6fU8pJl6q6YmZ4Fim3tZNQL660Ykqo"
        ],
        "targetUrl": "https://shop.wwe.com/",
        "title": "WWE Shop"
      }
    ],
    "stats": {
      "subscribers": 88900000,
      "subscribersText": "88.9M subscribers",
      "views": 69263586611
    },
    "title": "WWE"
};
