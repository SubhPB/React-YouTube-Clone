/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { vidCardTS } from '../../../src-utils/dataTypes';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

function VideoDisplay({className='', xtraCss='', source, isLoading=false }: vidCardTS): React.ReactElement {
  const {videoId} = useParams();
  if (isLoading) return <div className={`load-vid-display ${className} ${xtraCss}`}> <div className=' h-full w-full bg-zinc-600 rounded-lg'/></div>

  
  return  <>{
      videoId ?
      <div className={`vid-display relative ${className} ${xtraCss} `}>
        {/* <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${videoId}`}
        className={'absolute top-0 left-0'}
        width={'100%'} height={'100%'} playing={false}
        controls={true} 
        /> */}
      </div> : <></>
    } </>
  
}

export default VideoDisplay
