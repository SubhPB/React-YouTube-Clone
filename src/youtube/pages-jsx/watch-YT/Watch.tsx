/* -- BYIMAAN -> THE FUTURE -- */

import React, {useEffect} from 'react';
import { CmnProps } from '../../assists-jsx/Assists';
import { useNavigate, useParams } from 'react-router-dom';
import VideoContent from './Cinema';
import RelatedContent from './RelatedContent';
import PublisherData from './PublisherData';
import demoVideoDetail from '../../assists-jsx/videoDetailDemo.json';
import { VideoDetailApiResponse } from '../../assists-jsx/videoDetailTs';

const Watch: React.FC<CmnProps<any>> = ({className='', xtraCss='', callBackFunc= function(val:boolean){}}) => {

    const {videoId} = useParams();
    const navigate = useNavigate();

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

    const publishData = {source: demoVideoDetail as VideoDetailApiResponse , isLoading: false}
  

    // 2 components - Cinema & RelatedVids

    // watch-yt flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm bg-zinc-900 flex justify-between flex-col lg:flex-row
    return (
        <div className={`watch-yt flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm bg-zinc-900 flex justify-between flex-col lg:flex-row ${className} ${xtraCss}`}>
            <VideoContent className='min-h-[30%] lg:h-full w-full lg:w-[65%] flex flex-col px-2' children={<PublisherData xtraCss='hidden lg:flex' source={publishData.source} isLoading={publishData.isLoading}/>}  />
            <RelatedContent className='flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm lg:h-full w-full lg:w-[34%]' children={<PublisherData className=' lg:hidden' source={publishData.source} isLoading={publishData.isLoading} />}/>
        </div>
    );
};

export default Watch
