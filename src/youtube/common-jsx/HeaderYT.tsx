/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactElement, ReactNode, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { Img, defaultCmnProp } from '../assists-jsx/Assists';
import { IoSearch } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import UTubeLogo from '../../src-static/images/yt-logo.png';
import { useNavigate } from 'react-router-dom';
import MenuYT from './MenuYT';

interface Btn {
  name?: String;
  link?: String;
  component?: ReactElement | undefined;
  className?: String,
  xtraCss?: String,
  children ?: ReactNode | undefined,
  onClick ?: Function,
};

interface BtnsProps {
  btns?: Btn[],
  className?: String,
  xtraCss?: String,
  children ?: ReactNode | undefined,
  onClick ?: Function,
}

function HeaderYT() {

  const navigate = useNavigate();
  const [renderMenu, setRenderMenu] = useState<boolean>(true);

  const migrate = (url: string) => {
    navigate(url);
  };

  const buttons: Btn[] = [
    {name: 'search-icon', link: '#', component: <IoSearch className='h-5 w-5 text-bold sm:block lg:hidden ' onClick={() => migrate('/search')}/>},
    {name: 'video-icon', link: '#', component: <IoVideocamOutline className='h-5 w-5 text-bold' /> },
    {name: 'bell-icon', link: '#', component: <IoIosNotificationsOutline className='h-5 w-5 text-bold'/>},
    {name: 'user-icon', link: '#', component: <FaRegUser className='h-4 w-4 text-bold' /> }
  ]

  return (
    <div className='yt-title relative flex justify-between items-center'>
        
        { renderMenu && <MenuYT />}

        <div className="title-start flex gap-[2.2vmax] items-center">
            <FiMenu className='cursor-pointer' onClick={() => setRenderMenu(!renderMenu)}/>
            <div className='h-7 '>
              <Img source={UTubeLogo}/>
            </div> 
        </div>

        <div className="title-middle ">
          <SearchBar xtraCss='text-black bg-zinc-100 hidden lg:flex'/>
        </div>

        <div className="title-end h-full">
          <Buttons btns={buttons} className='flex gap-4 h-full items-center '/>
        </div>
    </div>
  );
};


export const SearchBar:React.FC<{xtraCss ?: string, inputCss?: string}> = ({xtraCss =" ", inputCss="min-w-[40vw] "}) => {

  const navigate = useNavigate();
  const [query, setQuery] = useState<string>('');

  const handleSubmit = ( ) => {
    if (query.trim().length > 0){
      navigate('/query/' + query.trim() );
      setQuery('');
    }
  };

  return (
    <div className={`search-bar h-full min-h-9 items-center rounded-2xl ${xtraCss}`}>

      <div className='p-2 opacity-[.7]'>
        <IoSearch onClick={handleSubmit} className='h-6 min-w-6 font-[200] '/>    
      </div> 

      <input type="text" placeholder='Search'
        className={'outline-none px-2 border-stone-900 min-h-full rounded-l-xl  bg-zinc-100 ' + inputCss}
        value={query} onChange={(i) => setQuery(i.currentTarget.value)}
      />
      
      <div className='px-4 py-[1px] border-l-[1px] border-stone-900 '>
        <IoSearch onClick={handleSubmit} className='h-6 min-w-6 font-[200] '/>    
      </div> 
      
    </div>
  );
};

const Buttons: React.FC<BtnsProps> = (props={...defaultCmnProp}) => {

  return (
    <div className={`btns ${props.className} ${props.xtraCss}`}>
      {
        props.btns && (
          props.btns.map( (btn,ind) => <Button key={ind} {...btn}/> )
        )
      }
    </div>
  );
};

const Button: React.FC<Btn> = (props=defaultCmnProp) => {


  if (props.component) {

    return (
      <div className={`cursor-pointer ${props.className} ${props.xtraCss}`} >
        {
          props.component && props.component
        }
      </div>
    )
  };

  return (
    <></>
  );

};

export default HeaderYT;
