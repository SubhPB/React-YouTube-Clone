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
import CommentsYT from '../comments-YT/Comments';
import VidDescription from '../Description-YT/VidDescription';

import { selectVideoDetails } from '../../../redux-YT/features/video/details/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux-YT/app/store';
import { fetchVideoDetailsAction } from '../../../redux-YT/features/video/details/actions';
import { fetchRelatedContentAction } from '../../../redux-YT/features/video/related-content/actions';

interface PublishTS {
    data : VideoDetailApiResponse,
    isLoading : boolean
}

const Watch: React.FC<CmnProps<any>> = ({className='', xtraCss='', callBackFunc= function(val:boolean){}}) => {

    const {videoId} = useParams();
    const navigate = useNavigate();

    // const _data = demoVideoDetail as VideoDetailApiResponse
    // const publishData = useFetch<VideoDetailApiResponse>(`video/details/?id=${videoId}`);
    //const publishData: PublishTS = {data: _data, isLoading: false}

    const appDispatch = useAppDispatch();
    const {data, error, isLoading} = useSelector( selectVideoDetails );

    useEffect( function componentDidMount(){

        const renderSideBar = true;
        // this callBackFunc will remove the SideBar from the UI...
        callBackFunc(!renderSideBar);

        return function componentWillUnMount(){
            // this will rerenders the sidebar at the UI...
            callBackFunc(renderSideBar);
        };
    }, []);

    useEffect( function didUpdate(){
        videoId  && appDispatch( fetchVideoDetailsAction(videoId) );
        videoId && appDispatch( fetchRelatedContentAction(videoId) );
    }, [appDispatch, videoId])
    
    if (!videoId) {
        navigate(-1);
        return <></>;
    };

    return (
        <div className={`watch-yt flex-grow-[1] max-h-dvh overflow-y-scroll scrollbar-hide lg:scrollbar-cstm bg-zinc-900 flex justify-between flex-col lg:flex-row ${className} ${xtraCss}`}>
            <VideoContent className='min-h-[30%] lg:h-full w-full lg:w-[65%] flex flex-col px-2' videoId={videoId} isLoading={isLoading} >
                <PublisherData xtraCss='hidden lg:flex' source={data} isLoading={isLoading} /> 
            </VideoContent>    
 
            <Routes>

                <Route path='comments/*' element={ <CommentsYT /> }/>
                <Route path={'description/'} element={  <VidDescription className='flex-grow-[1] max-h-dvh overflow-y-scroll sm:hide scrollbar-hide lg:scrollbar-cstm lg:h-full w-full lg:w-[34%]' source={data} isLoading={isLoading}/> }/>
                <Route path='*' element={ 
                    <RelatedContent className='flex-grow-[1] max-h-dvh overflow-y-scroll sm:hide scrollbar-hide lg:scrollbar-cstm lg:h-full w-full lg:w-[34%]'>
                        <PublisherData className=' lg:hidden' source={data} isLoading={isLoading} /> 
                    </RelatedContent>
                }/>


            </Routes>
  

        </div>
    );
};

export default Watch
