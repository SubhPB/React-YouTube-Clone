/* -- BYIMAAN -> THE FUTURE -- */
// resume from the video description...

import React, { ReactNode } from 'react'
import { Img } from '../assists-jsx/Assists';
import YTlogo from '../../src-static/images/yt-logo.png'

interface _VidCmnProp<srcT>{
    className ?: string;
    xtraCss ?: string;
    source ?: srcT;
    children ?: ReactNode;
    loading ?: boolean;
};

export const VideoCard:React.FC<_VidCmnProp<any>> = ({className='', xtraCss='', loading=true}) => {


    return (
      <div className={`vid-card ${className} ${xtraCss}`}>
        
      </div>
    )
};

const Thumbnail: React.FC<_VidCmnProp<any>> = ({className='', xtraCss='', source=[], loading=true}) => {

    if (loading){
      return <_SkeletonImg/>
    };

    return (
      <div className={`vid-thumbnail ${className} ${xtraCss}`}>
        <Img source={YTlogo}/>
      </div>
    )
};

const VideoDesc: React.FC<_VidCmnProp<any>> = ({className='', xtraCss='', source, loading=true}) => {

    const _ChannelImg: React.FC<_VidCmnProp<any>> = ({className='',xtraCss=''}) => {
      if(loading) return <_SkeletonImg className={className} xtraCss={xtraCss}/>;

      return (
        // from here...
        <></>
      )
    };

    return (
      <div className={`vid-desc ${className} ${xtraCss}`}>

      </div>
    );
};

const _SkeletonImg: React.FC<_VidCmnProp<any>> = ({className='', xtraCss=''}) => {
  return (
    <div className={`vid-thumbnail-skel bg-zinc-700 ${className} ${xtraCss}`} />
  )
};

const VideoCards: React.FC<_VidCmnProp<any>> = ({className='', xtraCss='', children}) => {

  // we really do ont need VideoCards!!! . But will use if the need arises...
  return (
    <div className={`vid-cards ${className} ${xtraCss}`}>
      {children}
    </div>
  )
};

