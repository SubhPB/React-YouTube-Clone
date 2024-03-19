/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react'
import { ChnlProp } from '../ChannelTS';
import { ApiResponse, Video, } from '../../../assists-jsx/apiInterfaces';
import { demoData } from '../ChannelVideo';
import FlexContainer from '../../../assists-jsx/FlexContainer';
import { VideoCardYT } from '../../../components-jsx/VideoCardYT.tsx/VideoCardYT';
import { LoadingFlexContainer } from '../../../common-jsx/BodyYT';
import useFetch from '../../../../src-utils/useFetch';
import { useParams } from 'react-router-dom';

export const ChnlHome:React.FC<ChnlProp<any>> = ({className='', xtraCss='', ChnlData}) => {

    const {channelId} = useParams();
    const _data: ApiResponse = demoData as ApiResponse;
    // const contents: Content[] | undefined = _data?.contents;
    const [data, error, isLoading] = [ _data , '', false ]
    // const { data , error, isLoading } = useFetch<ApiResponse>(`channel/videos/?id=${channelId}`);
    console.log('Channel Home was rendered')

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