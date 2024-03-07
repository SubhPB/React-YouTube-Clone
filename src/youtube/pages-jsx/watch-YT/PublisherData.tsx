/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactNode } from 'react';
import { Img } from '../../assists-jsx/Assists';
import YTlogo from '../../../src-static/images/yt-logo-mobile.png';
import { MdInsertComment } from "react-icons/md";
import { Genres } from '../../components-jsx/MiniHeader';
import { VideoDetailApiResponse } from '../../assists-jsx/videoDetailTs';
import { videoButtons } from './VideoButtons';
import { SiRedux } from "react-icons/si";

// this component will be reponsible for video comments, publishing info. , other functionalities...

interface vidDetailTS {
    className ?: string,
    xtraCss ?: string,
    children ?: ReactNode,
    source ?: VideoDetailApiResponse | null ,
    isLoading ?: boolean,
    isSmall ?: boolean
};


function PublisherData({className='', xtraCss='', source, isLoading, isSmall} : vidDetailTS) : React.ReactElement {

    // max-h-dvh overflow-y-scroll lg:scrollbar-cstm
    return (
        <div className={`publisher-data flex-grow-[1] flex flex-col gap-2 px-2 ${className} ${xtraCss}`}>
            <_VideoTitle className='min-h-6 w-full' source={source} isLoading={isLoading}/>
            <DetailedVideoInfo className='min-h-6 w-full ' source={source} isLoading={isLoading} />
            <PublisherChannelAndBtns source={source} isLoading={isLoading} />
            <VideoComments source={source} isLoading={isLoading} />
        </div>
    );
};

function _VideoTitle({className='', xtraCss='', source, isLoading}: vidDetailTS): React.ReactElement {

    if (isLoading) return <div className={` bg-zinc-600 min-h-8 w-1/2 `}></div>

    return (
        <div className={`pusblish-title pt-2 ${className} ${xtraCss}`}>
            <p className='card-p-tag '> {source?.title ?? ''} </p>
        </div>
    )
};

function DetailedVideoInfo({className='', xtraCss, source, isLoading} : vidDetailTS): React.ReactElement {

    if (isLoading) return <div className={`load-detail-v-info bg-zinc-600 min-h-[8vmin] w-[80%]`}/>

    return (
        <div className={`detailed-vid-info bg-zinc-600 rounded-xl p-2 text-xs ${className} ${xtraCss} `}>
            <p className='card-p-tag text-xs opacity-[.9]'> {source?.description ?? '' } </p>
        </div>
    )
};

function PublisherChannelAndBtns({className='', xtraCss='', source, isLoading} : vidDetailTS): React.ReactElement {

    function PChannelAndSubscribe1(){

        function P({className='', xtraCss='', children}: vidDetailTS){
            if (isLoading) return <p className={"load-p-chnl-subs min-h-6 mx-2 min-w-10 bg-zinc-600 rounded-2xl"} />
            
            return <p className={`cstm-p-chnl-sub ${className} ${xtraCss}`}> {children} </p>
        };

        function SubscribeBtn(){
            if (isLoading) return <div className="load-sub-btn p-4 min-h-9 min-w-20 rounded-[11px] bg-zinc-600"></div>
            return (
                <div className="subcribe-btn py-[4.5px] px-[7px] bg-zinc-100 cursor-pointer rounded-[24px]"> <P className='text-zinc-800 text-sm font-semibold'> Subscribe </P> </div>
            )
        };

        return (
            <div className="channel-and-subcribe flex gap-2 w-full lg:w-[36%] justify-between items-center cursor-default">
                <div className='flex items-center'>
                    <Img className='min-h-10 min-w-10 max-w-10 rounded-full overflow-hidden' source={ source?.thumbnails?.[4]?.url ?? ''} loading={isLoading}/>
                    <P className='chl-name font-bold ml-1 mr-2 cursor-pointer'> {source?.author?.title ?? ''} </P>
                    <P className='how-many-subs opacity-[.7] text-xs '> { source?.author?.stats?.subscribersText ?? ''} </P>
                </div>
                <SubscribeBtn />
            </div>
        );
    };

    function PVideoBtns(){

        return (
            <div className="pub-btns min-h-4 w-full lg:w-[62%]">
                <Genres className='flex p-2 gap-2 flex-shrink-0 w-full overflow-x-scroll scrollbar-hide'
                    source={ isLoading ? Array(3).fill('N/A') : videoButtons}
                    loading={isLoading}
                />
            </div>
        );
    };

    return (
        <div className={`pub-chnl-and-btns flex flex-col lg:flex-row justify-between ${className} ${xtraCss}`}>
            <PChannelAndSubscribe1 />
            <PVideoBtns />
        </div>
    )
};

function VideoComments({className='', xtraCss='', isLoading, source}: vidDetailTS): React.ReactElement {

    if (isLoading) return <div className="load-vid-comments min-h-[5vh] mb-2 w-[60%] bg-zinc-600 "></div>

    return (
        <div className={`vid-comments min-h-[6] w-full rounded-2xl bg-zinc-700 p-2 cursor-pointer ${className} ${xtraCss} `}>
            <span className='text-white opacity-[.9] text-sm flex items-center gap-2'> Comments <span className='ml-3'><MdInsertComment/></span>  <span className='opacity-[.8] '> {source?.stats?.comments ?? ''} </span> </span>
            <VideoComment isLoading={isLoading}/>
        </div>
    )
};

function VideoComment({className='', xtraCss='', isLoading, source}: vidDetailTS): React.ReactElement {

    if (isLoading) return (
        <div className={`load-vid-comment w-full min-h-5 flex justify-around items-center mt-2 ${className} ${xtraCss}`}>
            <div className="h-5 w-5 rounded-full bg-zinc-600 "></div>
            <div className="h-5 w-[85%] bg-zinc-600 "></div>
        </div>
    );

    return (
        <div className={`vid-commemt ${className} ${xtraCss} `}>
            <div className={`load-vid-comment w-full min-h-5 flex justify-around items-center m-2 ${className} ${xtraCss}`}>
                <SiRedux className='h-5 w-5'/>
                <div className="h-5 w-[90%] text-xs "> Please read YouTube's privacy policies before reading comments </div>
            </div>
        </div>
    )
};


export default PublisherData;
