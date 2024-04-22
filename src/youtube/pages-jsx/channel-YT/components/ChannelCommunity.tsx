/* -- BYIMAAN -> THE FUTURE -- */

import React, {useEffect, useState} from 'react'
import { ChnlProp } from '../ChannelTS';
import { useParams } from 'react-router-dom';
import { demoCommunityData } from '../ChannelComm';
import { Content } from '../ChannelComm';
import { Post } from '../ChannelComm';
import { Img } from '../../../assists-jsx/Assists';
import Paragraph from '../../Description-YT/Paragraph';
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import FlexContainer from '../../../assists-jsx/FlexContainer';

import { communityStateSelector } from '../../../../redux-YT/features/channel/chnlCommunity/communitySelectors';
import { useSelector } from 'react-redux';
import { fetchChnlCommunityAction } from '../../../../redux-YT/features/channel/chnlCommunity/communityActions';
import { useAppDispatch } from '../../../../redux-YT/app/store';

export const ChnlCommunity:React.FC<ChnlProp<any>> = ({className='', xtraCss=''}) => {

    const {channelId} = useParams();
    // const [data, error, isLoading] = [demoCommunityData as DataStructure, null, false]

    // thunk
    const appDispatch = useAppDispatch();
    const { data, error, isLoading } = useSelector(communityStateSelector);
    useEffect( function didUpdate(){
        if (channelId){
            appDispatch( fetchChnlCommunityAction(channelId))
        };
    }, [appDispatch, channelId])

    return (
        <div className={` w-full ${className} ${xtraCss}`}>
            <FlexContainer xtraCss='lg:gap-1'>
                {
                    data?.contents?.map( (content: Content, postInd: number) => <CommunityPOST key={postInd} src={content?.post} isLoading={isLoading}/> )
                }
            </FlexContainer>
        </div>
    )
};

function CommunityPOST( {className='', xtraCss='', isLoading, src, callBackFunc= () => true} : ChnlProp<Post> ): React.ReactElement{

    const NEUTRAL = "NEUTRAL", LIKED = "LIKED", DISLIKED = "DISLIKED"
    const [state, setState] = useState<"NEUTRAL" | "LIKED" | "DISLIKED">(NEUTRAL);

    function PostHeader(){
        return (
            <div className="title flex gap-3 items-center"> 
                <p className='text-sm font-semibold cursor-default'>{src?.author?.title}</p>
                <p className='text-xs font-light cursor-default'>{src?.publishedTimeText}</p>
            </div>
        );
    };
    
    function PostBtns({sizeCss='text-lg'}){
        return (
            <div className="post-btn flex gap-2">
               <p onClick={ () => setState( st => st === LIKED ? NEUTRAL : LIKED) }> {state === LIKED ? <AiFillLike className={sizeCss} /> :<AiOutlineLike className={sizeCss} />} </p>
               <p onClick={ () => setState( st => st === DISLIKED ? NEUTRAL : DISLIKED) }>{state === DISLIKED ? <BiSolidDislike className={sizeCss} /> :<BiDislike className={sizeCss} />} </p>
            </div>
        )
    }

    return (
        <div className={`comm-post flex p-2 gap-2 w-full lg:w-[40%] bg-zinc-800 rounded-2xl mb-2 ${className} ${xtraCss}`}>
            <Img source={''} className='max-h-8 min-h-8 max-w-8 min-w-8 rounded-full' loading={isLoading}></Img>

            <div className="post-cntnt w-full flex flex-col gap-2">
                <PostHeader />
                <Paragraph xtraCss='text-xs' source={src?.text} />
                <Img className='w-full h-[62vmin] rounded-md' source={src?.attachment?.images?.[0]?.source?.[0]?.url} loading={isLoading} />
                <PostBtns />
            </div>
        </div>
    )
}
