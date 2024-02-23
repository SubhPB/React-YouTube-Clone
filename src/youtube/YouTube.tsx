/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import DividerYT from './common-jsx/DividerYT';
import HeaderYT from './common-jsx/HeaderYT';
import SideBar from './common-jsx/SideBar';
import BodyYT from './common-jsx/BodyYT';

function YouTube() {
  return (
    <div className='y-tube w-[100vw] min-h-[100vh] max-h-fit pt-[0.8vmax] px-[0.8vmax] pb-[0.4vmax] bg-zinc-900 flex flex-col gap-2'>
        <HeaderYT />

        <DividerYT>
            <BodyYT />
            <SideBar />
        </DividerYT>    
    </div>
  )
};

export default YouTube

