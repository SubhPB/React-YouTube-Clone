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
  ChnlData ?: Data | undefined
};
  
export const data: Data = {
  "artistBio": "Shubhneet Singh, known professionally as Shubh, is an Indian rapper-singer and songwriter based in Canada associated with Punjabi music. Shubh rose to mainstream in 2021 with his single \"We Rollin\". He released his debut album 'Still Rollin' in 2023.\nHis numerous singles have charted on the Canadian Hot 100, New Zealand Chart, UK Singles Chart and Billboard India. His single \"Baller\" charted on the Canadian Hot 100. In 2023, his song \"Cheques\" from his debut album Still Rollin peaked at number 3 on Billboard India Songs, while album was charted on Canadian Albums Chart and New Zealand Albums Chart.",
  "avatar": [
      {
          "height": 48,
          "url": "https://yt3.googleusercontent.com/O4p5Qy9p7Clwl_JbAOhEs5X-uNYdUVdsOF6TkVFQ6cohk1_REoJs8_3F1AxbhvRev8jtnI9ZCg=s48-c-k-c0x00ffffff-no-rj",
          "width": 48
      },
      {
          "height": 88,
          "url": "https://yt3.googleusercontent.com/O4p5Qy9p7Clwl_JbAOhEs5X-uNYdUVdsOF6TkVFQ6cohk1_REoJs8_3F1AxbhvRev8jtnI9ZCg=s88-c-k-c0x00ffffff-no-rj",
          "width": 88
      },
      {
          "height": 176,
          "url": "https://yt3.googleusercontent.com/O4p5Qy9p7Clwl_JbAOhEs5X-uNYdUVdsOF6TkVFQ6cohk1_REoJs8_3F1AxbhvRev8jtnI9ZCg=s176-c-k-c0x00ffffff-no-rj",
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
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
              "width": 1060
          },
          {
              "height": 188,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
              "width": 1138
          },
          {
              "height": 283,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
              "width": 1707
          },
          {
              "height": 351,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
              "width": 2120
          },
          {
              "height": 377,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
              "width": 2276
          },
          {
              "height": 424,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
              "width": 2560
          }
      ],
      "mobile": [
          {
              "height": 88,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w320-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
              "width": 320
          },
          {
              "height": 175,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w640-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
              "width": 640
          },
          {
              "height": 263,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w960-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
              "width": 960
          },
          {
              "height": 351,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w1280-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
              "width": 1280
          },
          {
              "height": 395,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
              "width": 1440
          }
      ],
      "tv": [
          {
              "height": 180,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w320-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
              "width": 320
          },
          {
              "height": 480,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w854-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
              "width": 854
          },
          {
              "height": 720,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w1280-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
              "width": 1280
          },
          {
              "height": 1080,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w1920-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
              "width": 1920
          },
          {
              "height": 1192,
              "url": "https://yt3.googleusercontent.com/6JxHTCyi21vxhagrdiHUcDPh_TeCz7ZwAKBijN0OceLiqNxWEseLa38s1E4sV4rrF8uUkuLX3A=w2120-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
              "width": 2120
          }
      ]
  },
  "canonicalBaseUrl": "/@SHUBHWORLDWIDE",
  "channelId": "UCtGbExCzlwmsyWKpxLnyEww",
  "country": null,
  "description": "INDEPENDENT ARTIST\nSinger, songwriter and musician Shubh was born for the spotlight and his career is shaping up to be nothing short of iconic. The Punjabi-Canadian rapper and vocalist took over Hip-Hop music and culture on his own terms revising trap, hiphop and R&B through an ambitious vision. Thanks to his introspective rap style and his golden touch songwriting, he has sustained an enormous presence. Known for his breakout debut single We Rollin, Toronto based Shubh made a rapid rise in mainstream music industry. With over 250+ million career streams in less than 6 months since his debut, he continues to reign as one of the biggest emerging artist the world has ever seen. With such a rapid rise and a relentless stream of critical and commercial hits, its clear that Shubh is one of the greatest modern success stories in Hip-hop.\n\nFor Business & Inquiries:- +91 9820174336\nEmail: info@shubhworldwide.com\n\n",
  "hasBusinessEmail": true,
  "joinedDate": "2021-09-16",
  "joinedDateText": "Joined Sep 16, 2021",
  "keywords": [],
  "links": [
      {
          "icon": [
              {
                  "height": 16,
                  "url": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcQgQGqxF0RbLywN0a8dzJeoxsvcarYvo8M1PzuxQBm1Ln1Opj_b5rvZGzW6RVvRoA6RbHpcCJK4F_aUrlXmNmaYaYmTAZWLBzuDPkKGmNWWwg5LrSc",
                  "width": 16
              },
              {
                  "height": 256,
                  "url": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRxZkrRG9aX5fHK78xmz8JwLELqwTyWY6s3egM5AQb1H84gApv2CRYE9vX-pWhToe5HWoHsS3r__Nz2brFt_WqSn3QjDv3HAg5X2IZQh4YtYaJT0A9p",
                  "width": 256
              }
          ],
          "targetUrl": "https://music.apple.com/us/artist/shubh/1585737475",
          "title": "Apple Music"
      },
      {
          "icon": [
              {
                  "height": 16,
                  "url": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRkg5ej2Nhm5HWkVYYIxIzysv9gFuaHvk-ZXTcX12abSusd4VWmcTdPsGpAOcCFyn-YaSO3YtSHyKqkErVBdRnFbQV9l3gFcW9ahAM66P6xoZXi9A_U",
                  "width": 16
              },
              {
                  "height": 256,
                  "url": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcTy7pKZHWwdZTQI8ppIdfJl3oTzNyHxpcLbgiFyw2kA-Gl7QmCersvUjqHZG4Zt17PgaqGtNjuipfA-BAq2P7PHBRfxsLaCC1t9soXjCKc4ICqI-amI6Q",
                  "width": 256
              }
          ],
          "targetUrl": "https://open.spotify.com/artist/5r3wPya2PpeTTsXsGhQU8O?si=7cchTKiPQxKgWCSMwkbGGw&utm_source=copy-link",
          "title": "Spotify"
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
          "targetUrl": "https://www.instagram.com/shubhworldwide/",
          "title": "Instagram"
      },
      {
          "icon": [
              {
                  "height": 16,
                  "url": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcQ_s8sdsiZtJ-MA5tiDgMNvgHApqoN5K7WAwEcF1v-cnT9ZTNtqOHXVh0dB1iR3RtqGWRNEYO45jBL9RfOTWGE5LjDbZLn6x7Lbg4pYYvTgBR39qkOC",
                  "width": 16
              },
              {
                  "height": 256,
                  "url": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRG1MVHr1IpvVJqALJQMDPgMA6nEYsOF47YyAXWfSTmI3FEOeek-wWdQZFnnOKINEoyrjawT7etWBbARtEzuANzTKyAzTUHvZviD-X5gyeIY3IAt6hpag",
                  "width": 256
              }
          ],
          "targetUrl": "https://www.snapchat.com/add/shubh_neet?share_id=sDZLeM741m0&locale=en-CA",
          "title": "Snapchat"
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
          "targetUrl": "https://www.facebook.com/shubhworldwide/",
          "title": "Facebook"
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
          "targetUrl": "https://twitter.com/Shubhworldwide",
          "title": "Twitter"
      }
  ],
  "stats": {
      "subscribers": 4670000,
      "subscribersText": "4.67M subscribers",
      "videos": 27,
      "videosText": "27 videos",
      "views": 1407244606
  },
  "title": "SHUBH",
  "username": "@SHUBHWORLDWIDE"
}
