/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { vidCardTS } from '../../../src-utils/dataTypes';


function VideoDisplay({className='', xtraCss='', source, isLoading }: vidCardTS): React.ReactElement {
  return (
    <div className={`vid-diplay ${className} ${xtraCss} `}>
      
    </div>
  )
}

export default VideoDisplay
