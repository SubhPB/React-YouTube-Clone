/* -- BYIMAAN -> THE FUTURE -- */

import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewToken } from '../../../redux-YT/features/api/slice';
import { selectUnvalidTokens } from '../../../redux-YT/features/api/selectors';
import { Img } from '../../assists-jsx/Assists';
import GuideImg from '../../../src-static/images/key-guide.png'


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
      <p className='text-center'>Our default api-key has reached the maximum api calls limit of 100 api's per month. Please go to <a className='text-blue-600' href="https://rapidapi.com/auth/sign-up?referral=/Glavier/api/youtube138/">rapid api</a> for quick sign up and get your free api-key and paste in the following to keep enjoying this application. </p>
      <p className='text-sm pt-1 border-t-[1px] border-neutral-50'>After signup the following screen will be displayed to you. you would also need to subcribe to that Api. Then copy your api-key down below :-</p>
      <div className='flex justify-center w-full h-[15vmax]'>
        <Img source={GuideImg}/>
      </div>
      <p className='text-red-500 '>Don't forget to subcribe to that api after Signup. Otherwise the given api wil won't work even after registeration.</p>
    </div>
  )
}

function Input(){

  const [input, setInput] = useState<string>('');

  const navigate = useNavigate();
  const unValidTokens = useSelector( selectUnvalidTokens )
  const dispatch = useDispatch();

  const [msg, setMsg] = useState<string>( unValidTokens.length > 1 ? 'Please give a valid token to make api calls' :  '');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const token : string  = input.trim();
    if (token.length < 9){
      return setMsg('Please enter a valid token.')
    } else if (unValidTokens.includes(token)){
      return setMsg('Given token is already been expired or not valid');
    };
    executeToken(token)
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter'){
      handleClick()
    };
  }

  const executeToken = (token : string) => {
    setMsg('');
    setInput('');
    navigate('/');
    dispatch( addNewToken(token) );
  }

  return (
    <div className="b-input">
      <p className='text-blue-600 w-full my-2 px-1 text-center'>{msg}</p>
      <input onKeyDown={handleKeyDown} onChange={handleChange} value={input} type="text" placeholder='Your api key.' className='outline-none p-1 w-full rounded-md bg-zinc-100 my-4 text-zinc-900 font-semibold text-[1rem]' />
      <button onClick={handleClick} className='outline-none bg-zinc-900 w-full text-center grid justify-center'> <IoSend className='h-8 w-8 my-2' /> </button>
    </div>
  )
}

export default ApiError
