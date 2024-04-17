/* -- BYIMAAN -> THE FUTURE -- */

import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DividerYT from './common-jsx/DividerYT';
import HeaderYT from './common-jsx/HeaderYT';
import SideBar from './common-jsx/SideBar';
import BodyYT from './common-jsx/BodyYT';
import Watch from './pages-jsx/watch-YT/Watch'; 
import Channel from './pages-jsx/channel-YT/Channel';
import UserYT from './pages-jsx/user-YT/User';
import { useSelector } from 'react-redux';
import { selectApiError } from '../redux-YT/features/error/selector';
import ApiError from './pages-jsx/error-api-YT/ApiError';

function YouTube() {

  const [renderSideBar, setRenderSideBar] = useState<boolean>(true);

  const apiError = useSelector(selectApiError);
  const navigate = useNavigate();

  console.log("Api-error ",apiError);
  useEffect( function didUpdate() {
    
    if (apiError) navigate('/api-error');
  }, [apiError]);

  return (
    <div className='y-tube w-[100vw] h-[100vh] pt-[0.8vmax] px-[0.8vmax] pb-[0.4vmax] overflow-y-hidden bg-zinc-900 flex flex-col gap-2'>
        <HeaderYT />

        <DividerYT>

          <Routes>
            <Route path='query/:q' element={<BodyYT />} />
            <Route path='/' element={<BodyYT />}/>
            <Route path='/watch/:videoId/*' element={<Watch callBackFunc={setRenderSideBar} />}/>
            <Route path='/channel/:channelId/*' element={<Channel /> } />
            <Route path='/user/*' element={<UserYT />}/>
            {apiError && <Route path='/api-error' element={<ApiError />}/>}
            <Route path='*' element={<> -N/A- not found ...</>} />
          </Routes>

          { renderSideBar && <SideBar /> }

        </DividerYT>    
    </div>
  )
};

export default YouTube

