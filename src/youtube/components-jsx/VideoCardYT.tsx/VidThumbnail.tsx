/* -- BYIMAAN -> THE FUTURE -- */

import React from "react";
import { Img } from "../../assists-jsx/Assists";
import { vidCardTS } from "../../../src-utils/dataTypes";
import YTlogo from '../../../src-static/images/yt-logo.png';
import moment from "moment";
import { useNavigate } from "react-router-dom";

export const _SkeletonImg: React.FC<vidCardTS> = ({className='', xtraCss=''}) => {
    return (
      <div className={`vid-thumbnail-skel bg-zinc-700 ${className} ${xtraCss}`} />
    )
};

const videoDuration = (timeInSeconds: number = 0): string => {
  
    // Use moment.duration to create a duration object from seconds
    const duration = moment.duration(timeInSeconds, 'seconds');
  
    const hours = Math.floor(duration.asHours());
    // Format the duration as "hours:minutes:seconds"
    const formattedTime = (hours === 0 ? '' : `${hours}:`) + moment.utc(duration.asMilliseconds()).format("mm:ss");
  
    return formattedTime;
  };

export const _Thumbnail: React.FC<vidCardTS> = ({className='', xtraCss='', source, isLoading}) => {

    const navigate = useNavigate();
    if (isLoading || !source){
      return <_SkeletonImg className={className} xtraCss={xtraCss}/>
    };

    const haveTime = typeof source?.lengthSeconds === 'number';
    const handleClick = (e: React.MouseEvent): void => {
      if (source?.videoId) navigate(`/watch/${source?.videoId}`);
    };
    
    return (
      <div className={`vid-thumbnail relative rounded-[11px] overflow-hidden ${className} ${xtraCss}`} onClick={handleClick}>
        <Img source={source?.thumbnails?.[0].url ?? YTlogo}/>
        {haveTime && <div className="time-duration bg-zinc-800 p-1 rounded-[12px] absolute bottom-[3%] right-[2%] text-sm text-[white]"> {videoDuration(source?.lengthSeconds)} </div>}
      </div>
    )
};