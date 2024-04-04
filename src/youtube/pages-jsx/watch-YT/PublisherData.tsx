/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactNode, useState } from 'react';
import { Img } from '../../assists-jsx/Assists';
import { MdInsertComment } from "react-icons/md";
import { Genres } from '../../components-jsx/MiniHeader';
import { VideoDetailApiResponse } from '../../assists-jsx/videoDetailTs';
//import { videoButtons } from './VideoButtons';
import { VideoBtn, videoBtnTS } from './VideoButtons';
import { SiRedux } from "react-icons/si";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { FaDownLong, FaDownload } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { intToText } from '../../assists-jsx/funcs';
import { useSelector } from 'react-redux';
import { selectDisLikedVideos, selectLikedVideos } from '../../../redux-YT/features/video/targetVideos/targetVidSelectors';
import { useAppDispatch } from '../../../redux-YT/app/store';
import { likeVideoAction, dislikeVideoAction, neutralVideoAction } from '../../../redux-YT/features/video/targetVideos/targetVidSlice';
// this component will be reponsible for video comments, publishing info. , other functionalities...

interface vidDetailTS {
    className ?: string,
    xtraCss ?: string,
    children ?: ReactNode,
    source ?: VideoDetailApiResponse | null ,
    isLoading ?: boolean,
    isSmall ?: boolean,
    callBack ?: Function;
    onClick ?: Function;
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

    const navigate = useNavigate();
    const location = useLocation();
    const {videoId} = useParams();

    if (isLoading) return <div className={`load-detail-v-info bg-zinc-600 min-h-[8vmin] w-[80%]`}/>;

    const handleNavigation = (destinationUrl: string) => {
        console.log(location.pathname);

        if (!(location.pathname === destinationUrl || location.pathname === destinationUrl+'/')){
            navigate(destinationUrl);
        };
    };

    return (
        <div className={`detailed-vid-info bg-zinc-800 rounded-xl p-2 text-xs cursor-pointer ${className} ${xtraCss} `} onClick={ () => handleNavigation(`/watch/${videoId}/description/`) }>
            <p className='card-p-tag text-xs opacity-[.9]'> {source?.description ?? '' } </p>
            <p className='w-full pr-2 text-xs text-right pt-1 font-bold ' > READ MORE... </p>
        </div>
    );
};

function PublisherChannelAndBtns({className='', xtraCss='', source, isLoading} : vidDetailTS): React.ReactElement {

    const appDispatch = useAppDispatch();

    const {videoId} = useParams();
    const navigate = useNavigate();

    const videoIsLiked = useSelector( selectLikedVideos ).includes(videoId ?? 'N/A');
    const videoIsDisLiked = useSelector( selectDisLikedVideos ).includes( videoId ?? 'N/A' )

    function PChannelAndSubscribe1(){

        const [subscribed, setSubscribed] = useState<boolean>(false);

        function P({className='', xtraCss='',onClick= () => {}, children}: vidDetailTS){
            if (isLoading) return <p className={"load-p-chnl-subs min-h-6 mx-2 min-w-10 bg-zinc-600 rounded-2xl"} />
            
            return <p onClick={ () => onClick() } className={`cstm-p-chnl-sub ${className} ${xtraCss}`}> {children} </p>
        };

        function SubscribeBtn(){
            if (isLoading) return <div className="load-sub-btn p-4 min-h-9 min-w-20 rounded-[11px] bg-zinc-600"></div>
            return (
                <div onClick={() => {setSubscribed( !subscribed )} } className="subcribe-btn py-[4.5px] px-[7px] bg-zinc-100 cursor-pointer rounded-[24px]">
                    <P className='text-zinc-800 text-sm font-semibold'> {subscribed ? 'Subscribed': 'Subscribe'} </P> 
                </div>
            )
        };

        return (
            <div className="channel-and-subcribe flex gap-2 w-full lg:w-[36%] justify-between items-center cursor-default">
                <div className='flex items-center'>
                    <Img className='min-h-10 min-w-10 max-w-10 rounded-full overflow-hidden'
                      source={ source?.thumbnails?.[4]?.url ?? ''}
                      loading={isLoading}
                    />
                    <P className='chl-name font-bold ml-1 mr-2 cursor-pointer' onClick={ () => navigate(`/channel/${source?.author?.channelId}/`)} >
                         {source?.author?.title ?? ''} 
                    </P>
                    <P className='how-many-subs opacity-[.7] text-xs '> { source?.author?.stats?.subscribersText ?? ''} </P>
                </div>
                <SubscribeBtn />
            </div>
        );
    };

    function PVideoBtns(){

        const vidLikes = videoIsLiked ? intToText(Number(source?.stats?.likes)  + 1) : intToText(Number(source?.stats?.likes))
 
        const handleShare = async() => {
            const videoUrl = 'https://www.youtube.com/watch?v='+videoId;
            if (navigator?.share && videoId){
                try {
                    await navigator.share({
                        title: 'Check out this video!',
                        url: videoUrl,
                    })
                } catch (error){
                    console.log("Can't share the video. Error occured ", error)
                }
            }
        };
        const handleDownload = () => {
            alert(`We apologize, but the download feature is currently unavailable. We're actively working on improving our services to bring you new and exciting content. In the meantime, please explore the rest of our offerings. If you have any specific needs or questions, don't hesitate to contact our support team.\n Thank you for your understanding and patience \n - Byimaan`)
        };

        const handleByimaan = () => {
            window.open('https://subhpb.github.io/Portfolio/', '_blank', 'noopener,noreferrer');
        }

        const videoBtns: videoBtnTS[] = [
            {
                text: vidLikes, icon: videoIsLiked ? <AiFillLike /> :<AiOutlineLike />,
                onClick: () => videoId && appDispatch( videoIsLiked ? neutralVideoAction({ "id" : videoId } ) : likeVideoAction({ "id" : videoId }) )
            },
            {
                text: '', icon: videoIsDisLiked ? <BiSolidDislike /> :<AiOutlineDislike />,
                onClick: () =>  videoId && appDispatch( videoIsDisLiked ? neutralVideoAction({ "id" : videoId } ) : dislikeVideoAction({ "id" : videoId }))
            },
            {text: 'Share', icon: <FaRegShareSquare />, onClick: handleShare},
            {text: 'Download', icon: <FaDownload />, onClick: handleDownload},
            {text: 'Byimaan', icon: <FaReact />, onClick: handleByimaan }
        ];
        const videoButtons: React.ReactElement[] = videoBtns.map( (data: videoBtnTS, index: number) => <VideoBtn key={index} text={data?.text} icon={data?.icon} onClick={data?.onClick} /> );
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

    const navigate = useNavigate();
    const location = useLocation();
    const {videoId} = useParams(); 

    if (isLoading) return <div className="load-vid-comments min-h-[5vh] mb-2 w-[60%] bg-zinc-600 "></div>

    const handleNavigation = (destinationUrl: string) => {

        if (!(location.pathname === destinationUrl || location.pathname === destinationUrl+'/')){
            navigate(destinationUrl);
        };
    };

    return (
        <div className={`vid-comments min-h-[6] w-full rounded-2xl bg-zinc-800 p-2 cursor-pointer z-[4] ${className} ${xtraCss} `} onClick={() => handleNavigation(`/watch/${videoId}/comments`)}>
            <span className='text-white opacity-[.9] text-sm flex items-center gap-2'> Comments <span className='ml-3'><MdInsertComment/></span>  <span className='opacity-[.8] '> {intToText(Number(source?.stats?.comments)) ?? ''} </span> </span>
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
