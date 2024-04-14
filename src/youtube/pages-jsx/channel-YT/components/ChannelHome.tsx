/* -- BYIMAAN -> THE FUTURE -- */

import React, {useEffect} from 'react'
import { ChnlProp } from '../ChannelTS';
import { ApiResponse, Video, } from '../../../assists-jsx/apiInterfaces';
import { demoData } from '../ChannelVideo';
import FlexContainer from '../../../assists-jsx/FlexContainer';
import { VideoCardYT } from '../../../components-jsx/VideoCardYT.tsx/VideoCardYT';
import { LoadingFlexContainer } from '../../../common-jsx/BodyYT';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../../redux-YT/app/store';
import { useAppDispatch } from '../../../../redux-YT/app/store';
import { useSelector } from 'react-redux';
import { fetchChnlHomeAction } from '../../../../redux-YT/features/channel/chnlHome/homeActions';

export const ChnlHome:React.FC<ChnlProp<any>> = ({className='', xtraCss='', ChnlData}) => {

    const {channelId} = useParams();
    // const _data: ApiResponse = demoData as ApiResponse;
    // const [data, error, isLoading] = [ _data , '', false ]

    // thunk

    const {data, error, isLoading} = useSelector( (state: RootState) => state.channel.home );
    const appDispatch = useAppDispatch();

    useEffect( function didMount(){
        if (channelId) appDispatch( fetchChnlHomeAction(channelId) );
    }, [appDispatch, channelId]);


    if (isLoading || !data || error) return <LoadingFlexContainer noOfSkeletons={5} />

    function concatAvatar( vidData: Video):Video{
        if ( !vidData.hasOwnProperty('author') && ChnlData !== undefined){
            vidData = {
                ...vidData,
                 author: { 
                    avatar: ChnlData.avatar,
                    badges: ChnlData.badges,
                    canonicalBaseUrl: ChnlData.canonicalBaseUrl,
                    channelId: ChnlData.channelId,
                    title: ChnlData.title
                }
            }
        };
        return vidData;
    }

    return (
        <div className={` w-full ${className} ${xtraCss}`}>
            <FlexContainer> 
                {
                    data?.contents?.map( ( contentData, index ) => (
                        contentData?.type === 'video' && <VideoCardYT key={index} source={concatAvatar(contentData?.video)} isLoading={isLoading} isSmall={false} />
                    )) 
                }
            </FlexContainer>
        </div>
    )
};