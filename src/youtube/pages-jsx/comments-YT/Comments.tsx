/* -- BYIMAAN -> THE FUTURE -- */

import React, {useEffect} from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate, useParams } from 'react-router-dom';
import CommentsDemoData from '../../assists-jsx/commentDemo.json';
import CommentYT from './Comment';
import { CommentsSection } from '../../assists-jsx/vidComments';

import { useAppDispatch } from '../../../redux-YT/app/store';
import { useSelector } from 'react-redux';
import { videoCommentsSelector } from '../../../redux-YT/features/video/comments/commentsSelectors';
import { fetchCVideoCommentsAction } from '../../../redux-YT/features/video/comments/commentsActions';
// Ss

export interface CommentTS <C> {
    className ?: string,
    xtraCss ?: string,
    children ?: React.ReactNode,
    src ?: C,
    onClick ?: Function;
    isLoading ?: boolean
};

const CommentsYT:React.FC<CommentTS<CommentsSection>> = ( { className='', xtraCss='', children} ) => {

    const navigate = useNavigate();
    const {videoId} = useParams();
    // const data = CommentsDemoData as CommentsSection;
    // const isLoading = false;

    const { data, error, isLoading } = useSelector( videoCommentsSelector );
    const appDispatch = useAppDispatch();
    
    useEffect( function didMount(){
        videoId && appDispatch( fetchCVideoCommentsAction(videoId) )
    }, [appDispatch, videoId] )

    return(
        <div className={`yt-comments flex-grow-[1] flex-col overflow-hidden lg:h-full w-full lg:w-[34%] ${className} ${xtraCss}`}>
           
            <div className="dsc-head w-full text-nowrap font-bold p-3 flex justify-between border-b-[1.1px] border-zinc-200 ">
                Comments
                <RxCross1 className='cursor-pointer' onClick={ () => navigate(-1) }/>
            </div>

            {
                data ?
                    <div className="cmts-section flex-grow-[1] max-h-dvh overflow-y-scroll scrollbar-hide lg:scrollbar-cstm p-2 gap-2 ">
                        {
                            data && (
                                data?.comments?.map( (cmnt, index) => <CommentYT key={index} src={cmnt} isLoading={isLoading}/> )
                            )
                        }
                    </div>
                : Array(4).fill(0).map( (elem: number, ind: number) => <CommentYT key={ind} isLoading={true}  /> )
            }

        </div>
    );
};

export default CommentsYT;
