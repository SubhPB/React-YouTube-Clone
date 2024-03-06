/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { vidCardTS } from '../../../src-utils/dataTypes';
import VideoDisplay from './VideoDisplay';


const VideoContent: React.FC<vidCardTS> = ({className='', xtraCss='', source=null, isLoading=true, children}) => {


  const vidDetailSrc = { source : null, isLoading: true};

  return (
    <div className={`watch-cinema ${className} ${xtraCss}`} >
      <VideoDisplay className=' w-full h-full lg:h-[57%] rounded-lg py-1 flex-shrink-0' source={source} isLoading={isLoading} />
      {children}
    </div>
  )
};


export default VideoContent;
