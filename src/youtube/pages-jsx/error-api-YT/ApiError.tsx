/* -- BYIMAAN -> THE FUTURE -- */

import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";

function ApiError() {
  return (
    <div className='error-yt flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm grid items-center justify-center px-5'>
      <div className="input-container w-full lg:w-[750px] bg-zinc-800 p-3 ">
        <Box />
        <Input />
      </div>
    </div>
  )
};

function Box(){
  return (
    <div className="box w-full">
      <h2 className='b-header text-center text-red-600 font-semibold'> Api Error </h2>
      <p className='text-center'>Our default api-key has reached the maximum api calls limit of 100 api's per month. Please go to <a href="https://rapidapi.com/auth/sign-up?referral=/Glavier/api/youtube138/">rapid api</a> for quick sign up and get your free api-key and paste in the following to keep enjoying this application.</p>
    </div>
  )
}

function Input(){

  const [input, setInput] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  };

  return (
    <div className="b-input">
      <input onChange={handleChange} value={input} type="text" placeholder='Your api key.' className='outline-none p-1 w-full rounded-md bg-zinc-100 my-4 text-zinc-900 font-semibold text-[1rem]' />

      <button onClick={handleClick} className='outline-none bg-zinc-900 w-full text-center grid justify-center'> <IoSend className='h-8 w-8 my-2' /> </button>
    </div>
  )
}

export default ApiError
