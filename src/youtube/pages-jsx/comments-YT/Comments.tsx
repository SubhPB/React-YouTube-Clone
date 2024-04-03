/* -- BYIMAAN -> THE FUTURE -- */

import React, {useEffect, useState} from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate, useParams } from 'react-router-dom';
import CommentsDemoData from '../../assists-jsx/commentDemo.json';
import CommentYT from './Comment';
import { CommentsSection } from '../../assists-jsx/vidComments';
import { IoSend } from "react-icons/io5";
import { Comment } from '../../assists-jsx/vidComments';

import { useAppDispatch } from '../../../redux-YT/app/store';
import { useSelector } from 'react-redux';
import { videoCommentsSelector } from '../../../redux-YT/features/video/comments/commentsSelectors';
import { fetchCVideoCommentsAction } from '../../../redux-YT/features/video/comments/commentsActions';
import { selectComments } from '../../../redux-YT/features/video/targetVideos/targetVidSelectors';
import { addVideoComment, deleteVideoComment } from '../../../redux-YT/features/video/targetVideos/targetVidSlice';
import { Img } from '../../assists-jsx/Assists';
// Ss

export interface CommentTS <C> {
    className ?: string,
    xtraCss ?: string,
    children ?: React.ReactNode,
    src ?: C,
    onClick ?: Function;
    isLoading ?: boolean;
    byAuthor ?: boolean;
};

const CommentsYT:React.FC<CommentTS<CommentsSection>> = ( { className='', xtraCss='', children} ) => {

    const navigate = useNavigate();
    const {videoId} = useParams();
    const data = CommentsDemoData as CommentsSection;
    const isLoading = false;

    const userComments:Comment[]  = useSelector( selectComments(videoId ?? 'N/A') );
    // const { data, error, isLoading } = useSelector( videoCommentsSelector );
    // const appDispatch = useAppDispatch();
    
    // useEffect( function didMount(){
    //     videoId && appDispatch( fetchCVideoCommentsAction(videoId) )
    // }, [appDispatch, videoId] )

    return(
        <div className={`yt-comments relative flex-grow-[1] flex-col overflow-hidden lg:h-full w-full lg:w-[34%] ${className} ${xtraCss}`}>
           
            <div className="dsc-head w-full text-nowrap font-bold p-3 flex justify-between border-b-[1.1px] border-zinc-200 ">
                Comments
                <RxCross1 className='cursor-pointer' onClick={ () => navigate(-1) }/>
            </div>

            {
                (data || userComments.length > 0) ?
                    <div className="cmts-section flex-grow-[1] max-h-dvh overflow-y-scroll scrollbar-hide lg:scrollbar-cstm p-2 gap-2 ">
                        {
                            userComments?.map( (cmnt, ind) => cmnt?.content && <CommentYT key={cmnt.commentId} src={cmnt}/> )
                        }
                        {
                            data && (
                                data?.comments?.map( (cmnt, index) => cmnt?.content && <CommentYT key={index} src={cmnt} isLoading={isLoading}/> )
                            )
                        }
                    </div>
                : Array(4).fill(0).map( (elem: number, ind: number) => <CommentYT key={ind} isLoading={true}  /> )
            }

            <CommentInput />

        </div>
    );
};

const CommentInput: React.FC = () => {

    const [comment, setComment ] = useState<string>('');
    const appDispatch = useAppDispatch();
    const {videoId} = useParams(); 

    const sendComment = () => {
        if (comment.trim().length > 0 && videoId){
            console.log('Going to submit comment ', comment);
            appDispatch(addVideoComment({
                id: videoId,
                content: comment,
            }))
            setComment('');
        }
    };

    return (
        <div className="cmnt-input absolute left-0 bottom-0 z-10 w-full bg-zinc-900 flex justify-around items-center translate-y-[-100%] py-1">
            <div className="min-h-6 max-h-6 min-w-6 max-w-6 rounded-full overflow-hidden">
                <Img source='https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  />
            </div>
            <input onKeyDown={(e) => e.key === 'Enter' && sendComment()} onChange={(e) => setComment(e.target.value)} value={comment} type="text" className='min-w-[80%] p-2 border-[1px] outline-none  rounded-2xl bg-transparent' placeholder='Add a comment...' />
            <IoSend onClick={sendComment} className={`min-h-6 max-h-6 min-w-6 max-w-6 cursor-pointer ${comment.trim().length > 0 ? 'opacity-[1]' : 'opacity-[.8]'}`} />
        </div>
    )
}

export default CommentsYT;
