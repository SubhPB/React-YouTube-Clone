/* -- BYIMAAN -> THE FUTURE -- */

import { UserProp } from "../User";
import React from 'react'

function LikedVideos({className='',xtraCss='' }:UserProp) {
  return (
    <div className={`liked-vid h-full w-full  ${className} ${xtraCss}`}>
      
    </div>
  )
}

export default LikedVideos;
