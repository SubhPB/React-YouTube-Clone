/* -- BYIMAAN -> THE FUTURE -- */

import { PayloadAction } from "@reduxjs/toolkit";
import { IdActionType, AddCommentAction, delCommentAction } from "./targetVidTypes";
import { VideoDataTs } from "./targetVidTypes";
import { StatusTs } from "./targetVidTypes";
import { Comment } from "../../../../youtube/assists-jsx/vidComments";

function likeVideoAction(state: VideoDataTs, action: PayloadAction<IdActionType> ) {
    const videoId = action.payload.id;
    const videoExist = Object.keys(state).includes(videoId);
    if (videoExist){
        state[videoId].status = StatusTs.LIKED;
    } else {
        state[videoId] = {
            status : StatusTs.LIKED,
            myComments: [],
        }
    }
};

function dislikeVideoAction(state: VideoDataTs, action: PayloadAction<IdActionType> ) {
    const videoId = action.payload.id;
    const videoExist = Object.keys(state).includes(videoId);
    if (videoExist){
        state[videoId].status = StatusTs.DISLIKE;
    } else {
        state[videoId] = {
            status : StatusTs.DISLIKE,
            myComments: [],
        }
    }
};

function neutralVideoAction(state: VideoDataTs, action: PayloadAction<IdActionType> ) {
    const videoId = action.payload.id;
    const videoExist = Object.keys(state).includes(videoId);
    if (videoExist){
        // if videoExists & it's state going to be neutral & do not have comments, there is no sense to save it in state.
        const haveComments = state[videoId].myComments.length > 0
        haveComments ? state[videoId].status = StatusTs.NEUTRAL : delete state[videoId]
    } else {
        state[videoId] = {
            status : StatusTs.NEUTRAL,
            myComments: [],
        }
    }
};

function addVideoComment(state: VideoDataTs, action: PayloadAction<AddCommentAction>){
   
    const {id:videoId, content=null} = action.payload;
    const videoExist = Object.keys(state).includes(videoId);

    if (content){
        const comment: Comment = {
            author: {
                avatar: [{
                    height: 0,
                    url: 'https://images.pexels.com/photos/33961/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    width: 0,
                }],
                badges: [],
                isChannelOwner: false,
                title: 'Byimaan'
            },
            commentId: videoId+Date.now() ,
            content: content,
            creatorHeart: false,
            cursorReplies: null,
            publishedTimeText: '',
            stats: {
                replies: 0,
                votes: 0,
            }
        };

        if (videoExist){
            const video = state[videoId];
            video.myComments = [
                comment,
                ...video.myComments
            ]  
        } else {
            state[videoId] = {
                status: StatusTs.NEUTRAL,
                myComments: [comment]
            }
        };
    };
}

function deleteVideoComment(state: VideoDataTs, action: PayloadAction<delCommentAction>){
    const {id:videoId, commentId=null} = action.payload;
    const videoExist = Object.keys(state).includes(videoId);
    if (videoExist){
        if (state[videoId].status === StatusTs.NEUTRAL){
            delete state[videoId]
        } else {
            state[videoId].myComments = state[videoId].myComments.filter((val, ind) => val.commentId !== commentId);
        }
    };
}


export const targetVideoActions = { likeVideoAction, dislikeVideoAction, neutralVideoAction, addVideoComment, deleteVideoComment };
