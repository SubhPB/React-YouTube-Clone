/* -- BYIMAAN -> THE FUTURE -- */

import React from "react";
import { vidCardTS } from "../../../src-utils/dataTypes";
import { _Thumbnail } from "./VidThumbnail";
import { VideoDesc } from "./VideoDescription";
import { _ChannelImg } from "./VideoDescription";
import { _CardDetails } from "./VideoDescription";
import { _CardTitle } from "./VideoDescription";
import { _CardChannelName } from "./VideoDescription";
import { useAppDispatch } from "../../../redux-YT/app/store";
import { appendVideoInHistory } from "../../../redux-YT/features/history/slice";

export const VideoCardYT: React.FC<vidCardTS> = ({className='', xtraCss='', source=null, isLoading=true, isSmall=false}) => {

    const ifSmallSize = {
        videoCardCss: 'min-h-[18vh] max-h-[19vh] w-full my-1 cursor-default flex justify-between',
        thumbnailCss: ' h-full w-[21vh] lg:w-[30vh] mr-1 flex-shrink-[0] ',
        videoDescCss: 'flex-grow-[1] ',
        cardDetailsCss: 'w-full h-full flex flex-col pb-4 gap-1  ',
    };

    const appDispatch = useAppDispatch();

    const saveInHistory = () => {
        if (source) {
            appDispatch( appendVideoInHistory({
                type: 'video',
                video: source
            }))
        };
    };

    return (
        <div className={isSmall ? ifSmallSize.videoCardCss : "vid-card min-h-[38vh] lg:min-h-[44vh] w-full lg:w-1/3 p-4 mb-4 cursor-default max-h-[40vh]"} onClick={saveInHistory}>

            <_Thumbnail className={ isSmall ? ifSmallSize.thumbnailCss : 'h-[85%] w-full mb-2' } isLoading={isLoading} source={source} />

            <VideoDesc className={isSmall ? ifSmallSize.videoDescCss : 'flex flex-row gap-2 justify-around items-center w-full h-fit'} isLoading={isLoading} source={source}>
                
                { !isSmall && <_ChannelImg className='h-11 min-w-11 max-w-11 rounded-full overflow-hidden' source={source} isLoading={isLoading} />}

                <_CardDetails  className={ isSmall ? ifSmallSize.cardDetailsCss : 'flex flex-col gap-2 justify-center w-[calc(100%-3rem)]'} source={source} isLoading={isLoading}>
                    <_CardTitle className={`text-sm ${isSmall ? 'sm-card-p-tag' :'card-p-tag'}`} isLoading={isLoading} source={source} />
                    <_CardChannelName  isLoading={isLoading} source={source} isSmall={isSmall}/>
                </_CardDetails>

            </VideoDesc>

        </div>
    )
};