/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import LikedVideos from './you-page/LikedVideo';
import { Route, Routes } from 'react-router-dom';
import History from './you-page/History';
import Subcriptions from './general-page/Subcriptions';

export interface UserProp {
    className ?: string,
    xtraCss ?: string,
    children ?: React.ReactNode,
    isLoading ?: boolean,
}

function UserYT({className='', xtraCss=''}: UserProp) {
  return (
    <div className={`user-yt flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm ${className} ${xtraCss}`}>
      <Routes>
        <Route path='you/liked-videos' element={<LikedVideos />}/>
        <Route path='you/history' element={<History />} />
        <Route path='general/subcriptions' element={<Subcriptions />} />
      </Routes>
    </div>
  )
}

export default UserYT;
