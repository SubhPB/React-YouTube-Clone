/* -- BYIMAAN -> THE FUTURE -- */

import React, {ReactElement, ReactNode} from 'react';
import { IoIosHome } from "react-icons/io";
import { defaultCmnProp } from '../assists-jsx/Assists';
import { SiYoutubeshorts } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { MdSubscriptions } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

interface Prop {
  className?: String,
  xtraCss?: String,
  children ?: ReactNode | undefined,
};

interface PageProp {
  className?: String, xtraCss?: String,
  name: String, url?: string, component?: ReactElement | undefined;
  onClick: Function
}

const SideBar:React.FC<Prop> = (props=defaultCmnProp) => {

  const navigate = useNavigate();
  
  const pages: PageProp[] = [
    {name: 'Home', url: '/', component: <IoIosHome className='h-5 min-w-5 '/>, onClick: () => navigate('/')},
    {name: 'Subscription', url: '/subscription', component: <MdSubscriptions className='h-5 min-w-5' />, onClick:() => navigate('/user/general/subcriptions')},
    {name: 'Github', component: <SiYoutubeshorts className='h-5 min-w-5'/>, onClick: () => window.open('https://github.com/SubhPB/React-YouTube-Clone', '_blank', 'noopener,noreferrer') },
    {name: 'Byimaan', url: 'https://subhpb.github.io/Portfolio/', component: <RiJavascriptLine className='h-5 min-w-5'/>, onClick: () => window.open('https://subhpb.github.io/Portfolio/', '_blank', 'noopener,noreferrer') },
  ]

  return (
    <div className={`side-bar w-full lg:h-[100%] py-3 lg:px-3 lg:w-fit flex flex-row justify-around items-center lg:justify-start lg:gap-6 lg:flex-col ${props.className} ${props.xtraCss}`}>
      {
        pages.map( (page, ind) => <Page key={ind} {...page} onClick={page.onClick} />)
      }
    </div>
  );
};

const Page: React.FC<PageProp> = ({className='',xtraCss='', name,url, component, onClick}) => {

  return (
    <div onClick={() => onClick()} className={`side-bar-page cursor-pointer flex flex-col justify-center items-center ${className} ${xtraCss} `}>
      {component}
      <p className='text-sm'>{name}</p>
    </div>
  )
}

export default SideBar;