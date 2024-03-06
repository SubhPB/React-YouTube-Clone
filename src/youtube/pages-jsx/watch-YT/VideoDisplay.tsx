/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { vidCardTS } from '../../../src-utils/dataTypes';


function VideoDisplay({className='', xtraCss='', source, isLoading }: vidCardTS): React.ReactElement {

  if (isLoading) return <div className={`load-vid-display ${className} ${xtraCss}`}> <div className=' h-full w-full bg-zinc-600 rounded-lg'/></div>

  return (
    <div className={`vid-diplay ${className} ${xtraCss} `}>
      
    </div>
  )
}

export default VideoDisplay
