/* -- BYIMAAN -> THE FUTURE -- */

// import React from 'react'
import { YouPageHeader } from "../you-page/History";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Notification() {
  return (
    <div className="notification h-full w-full flex flex-col">
      <YouPageHeader text='Notification'/>

      <div className="flex-grow-[1] grid items-center">
        <div className="">
            <IoIosNotificationsOutline className='text-[5rem] w-full text-center opacity-[0.9]' />
            <h2 className='text-center text-[1.5rem] opacity-[0.8]'>Your Notifications live here</h2>
            <h3 className='text-center  text-[1.1rem] opacity-[0.8]'>Subscribe to your favorite channels to get notified about their latest videos</h3>
        </div>
      </div>
    </div>
  )
}
