/* -- BYIMAAN -> THE FUTURE -- */

import React, { useEffect } from 'react'
import { ChnlProp } from '../ChannelTS';
import { useParams } from 'react-router-dom';
import useFetch from '../../../../src-utils/useFetch';
import { ApiResponse } from '../../../assists-jsx/apiInterfaces';
import searchDemoData from '../../../../youtube/assists-jsx/searchDemoData.json'
import FlexContainer from '../../../assists-jsx/FlexContainer';
import { LoadingFlexContainer } from '../../../common-jsx/BodyYT';
import { VideoCardYT } from '../../../components-jsx/VideoCardYT.tsx/VideoCardYT';

import { useAppDispatch } from '../../../../redux-YT/app/store';
import { chnlSearchStateSelector } from '../../../../redux-YT/features/channel/chnlSearch/searchSelectors';
import { useSelector } from 'react-redux';
import { fetchChnlSearchAction } from '../../../../redux-YT/features/channel/chnlSearch/searchActions';

const ChannelSearch:React.FC<ChnlProp<any>> = ({className='', xtraCss=''}) => {

    const {channelId, searchQuery} = useParams();

    // const {data, error, isLoading} = useFetch<ApiResponse>(`channel/search/?id=${channelId}&q=${searchQuery}`)
    // const [data , error, isLoading] : [ApiResponse, null, boolean] = [searchDemoData as ApiResponse, null, false]

    // thunk
    const appDispatch = useAppDispatch();
    const { data, error, isLoading} = useSelector( chnlSearchStateSelector );
    
    useEffect( function didMount(){

        if (channelId && searchQuery) appDispatch( fetchChnlSearchAction(channelId, searchQuery) );

    }, [appDispatch, channelId, searchQuery])

    if (isLoading) return <LoadingFlexContainer />
    return (
        <div className={` w-full ${className} ${xtraCss}`}>
            <FlexContainer xtraCss='gap-1'>
                {
                    data?.contents?.map( (content, index) => content?.type ==='video' && <VideoCardYT key={index} source={content?.video} isLoading={isLoading} isSmall={true} />)
                }
            </FlexContainer>
        </div>
    )
};

export default ChannelSearch;