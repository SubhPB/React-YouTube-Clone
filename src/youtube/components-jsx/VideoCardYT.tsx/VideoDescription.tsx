/* -- BYIMAAN -> THE FUTURE -- */

import React from "react";
import { vidCardTS } from "../../../src-utils/dataTypes";
import { Img } from "../../assists-jsx/Assists";
import { _SkeletonImg } from "./VidThumbnail.";
import { IoMdEye } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

export const VideoDesc: React.FC<vidCardTS> = ({className='', xtraCss='', children}) => {

    return (
       <div className={`vid-desc ${className} ${xtraCss}`}>
        {children}
       </div> 
    )
};

export const _ChannelImg: React.FC<vidCardTS> = ({className='', xtraCss='', source, isLoading}) => {

    if(isLoading || !source) return <_SkeletonImg className={'' + className} xtraCss={xtraCss}/>;

    return <div className={`channel-img ${className} ${xtraCss}`}> <Img source={source?.author?.avatar?.[0]?.url}/></div>;
};

export const _CardDetails: React.FC<vidCardTS> = ({className='', xtraCss='', children}) => {
    return (
        <div className={`card-details ${className} ${xtraCss}`}>
            {children}
        </div>
    )
};

export const _CardTitle: React.FC<vidCardTS> = ({className='', xtraCss='', source, isLoading}) => {

    if (isLoading || !source) return <div className={`load-title min-h-4 bg-zinc-700 w-full`}></div>;
    return (
      <p className={`card-title ${className} ${xtraCss}`} >{ source?.title  ?? ''}</p>
    )
};

export const _CardChannelName: React.FC<vidCardTS> = ({className='', xtraCss='', source, isLoading, isSmall}) => {

    if (isLoading || !source) return <div className={`load-channel-name min-h-3 bg-zinc-700 w-1/3 `}></div>

    const isVerified = source?.author?.badges?.[0]?.text === 'Verified';
  
    const _Views: React.FC<vidCardTS> = ({className='views-section flex gap-2 opacity-[.7]', xtraCss=''}) => {
  
      if ( !source?.stats?.views ){
        return <></>;
      };
    
      return (
        <div className={`video-views ${className} ${xtraCss}`}>
          <IoMdEye className='h-4 min-w-4'/>
          <p className='text-xs'>{source?.stats?.views}</p>  
        </div>
      )
    };
  
    return (
      <div className={`flex ${isSmall ? 'flex-col gap-[2px]' : 'items-center gap-5'}`}>
        <div className={`flex items-center gap-2 `}>
          <p className={`card-channel-name text-sm opacity-[.7] card-p-tag  ${className} ${xtraCss}`} >{ source?.author?.title ?? " Test channel Name"}</p>
          {isVerified && <FaCircleCheck className='h-4 min-w-4'/>}
        </div>
        <_Views />
      </div>
    );
    
};