/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import LikedVideos from './you-page/LikedVideo';
import { Route, Routes } from 'react-router-dom';

export interface UserProp {
    className ?: string,
    xtraCss ?: string,
    children ?: React.ReactNode,
    isLoading ?: boolean,
}

function UserYT({className='', xtraCss=''}: UserProp) {
  return (
    <div className={`user-yt flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm bg-zinc-300 ${className} ${xtraCss}`}>
      <Routes>
        <Route path='you/liked-videos' element={<LikedVideos />}/>
      </Routes>
    </div>
  )
}

export default UserYT;
