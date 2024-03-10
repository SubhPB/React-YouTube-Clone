/* -- BYIMAAN -> THE FUTURE -- */

import React, {useEffect} from 'react';
import { CmnProps } from '../../assists-jsx/Assists';
import { useNavigate, useParams } from 'react-router-dom';
import VideoContent from './Cinema';
import RelatedContent from './RelatedContent';
import PublisherData from './PublisherData';
import demoVideoDetail from '../../assists-jsx/videoDetailDemo.json';
import { VideoDetailApiResponse } from '../../assists-jsx/videoDetailTs';
import { Routes, Route } from 'react-router-dom';
import useFetch from '../../../src-utils/useFetch';
import VidDescription from '../Description-YT/VidDescription';

interface PublishTS {
    data : VideoDetailApiResponse,
    isLoading : boolean
}

const Watch: React.FC<CmnProps<any>> = ({className='', xtraCss='', callBackFunc= function(val:boolean){}}) => {

    const {videoId} = useParams();
    const navigate = useNavigate();

    const _data = demoVideoDetail as VideoDetailApiResponse

    // const publishData = useFetch<VideoDetailApiResponse>(`video/details/?id=${videoId}`);
    const publishData: PublishTS = {data: _data, isLoading: false}

    useEffect( function componentDidMount(){

        const renderSideBar = true;
        // this callBackFunc will remove the SideBar from the UI...
        callBackFunc(!renderSideBar);

        return function componentWillUnMount(){
            // this will rerenders the sidebar at the UI...
            callBackFunc(renderSideBar);
        };
    }, []);
    
    if (!videoId) {
        navigate(-1);
        return <></>;
    };

    return (
        <div className={`watch-yt flex-grow-[1] max-h-dvh overflow-y-scroll scrollbar-hide lg:scrollbar-cstm bg-zinc-900 flex justify-between flex-col lg:flex-row ${className} ${xtraCss}`}>
            <VideoContent className='min-h-[30%] lg:h-full w-full lg:w-[65%] flex flex-col px-2' videoId={videoId} isLoading={publishData.isLoading} >
                <PublisherData xtraCss='hidden lg:flex' source={publishData.data} isLoading={publishData.isLoading} /> 
            </VideoContent>    
 
            <Routes>

                <Route path='comments/*' element={ <div className='flex-grow-[1] max-h-dvh overflow-y-scroll sm:hide scrollbar-hide lg:scrollbar-cstm lg:h-full w-full lg:w-[34%]'> Comments Section </div> }/>
                <Route path={'description/'} element={  <VidDescription className='flex-grow-[1] max-h-dvh overflow-y-scroll sm:hide scrollbar-hide lg:scrollbar-cstm lg:h-full w-full lg:w-[34%]'/> }/>
                <Route path='*' element={ 
                    <RelatedContent className='flex-grow-[1] max-h-dvh overflow-y-scroll sm:hide scrollbar-hide lg:scrollbar-cstm lg:h-full w-full lg:w-[34%]'>
                        <PublisherData className=' lg:hidden' source={publishData.data} isLoading={publishData.isLoading} /> 
                    </RelatedContent>
                }/>

            </Routes>
  

        </div>
    );
};

export default Watch
