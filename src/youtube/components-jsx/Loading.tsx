/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { Img } from '../assists-jsx/Assists';
import YTLogo from "../../src-static/images/yt-logo-mobile.png";
import YTubeLogo from '../../src-static/images/yt-logo.png';
import ReactLogo from '../../../public/logo512.png'

function Loading() {
  return (
    <div className='h-screen w-screen grid'>
      <div className="self-center justify-self-center flex flex-col items-center gap-4">
        <div className="loading-img h-[12vmin] w-fit"> <Img source={YTubeLogo}/> </div>
        <div className="custom-loader" />
      </div>
    </div>
  )
}

export default Loading;
