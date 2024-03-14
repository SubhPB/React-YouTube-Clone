/* -- BYIMAAN -> THE FUTURE -- */

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DividerYT from './common-jsx/DividerYT';
import HeaderYT from './common-jsx/HeaderYT';
import SideBar from './common-jsx/SideBar';
import BodyYT from './common-jsx/BodyYT';
import Watch from './pages-jsx/watch-YT/Watch'; 
import Channel from './pages-jsx/channel-YT/Channel';

function YouTube() {

  const [renderSideBar, setRenderSideBar] = useState<boolean>(true);
  
  return (
    <div className='y-tube w-[100vw] h-[100vh] pt-[0.8vmax] px-[0.8vmax] pb-[0.4vmax] overflow-y-hidden bg-zinc-900 flex flex-col gap-2'>
        <HeaderYT />

        <DividerYT>

          <Routes>
            <Route path='query/:q' element={<BodyYT />} />
            <Route path='/' element={<BodyYT />}/>
            <Route path='/watch/:videoId/*' element={<Watch callBackFunc={setRenderSideBar} />}/>
            <Route path='/channel/:channelId/*' element={<Channel /> } />
            <Route path='*' element={<> -N/A- not found ...</>} />
          </Routes>

          { renderSideBar && <SideBar /> }

        </DividerYT>    
    </div>
  )
};

export default YouTube

