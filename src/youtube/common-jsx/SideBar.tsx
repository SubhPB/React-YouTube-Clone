/* -- BYIMAAN -> THE FUTURE -- */

import React, {ReactElement, ReactNode} from 'react';
import { IoIosHome } from "react-icons/io";
import { defaultCmnProp } from '../assists-jsx/Assists';
import { SiYoutubeshorts } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { MdSubscriptions } from "react-icons/md";

interface Prop {
  className?: String,
  xtraCss?: String,
  children ?: ReactNode | undefined,
};

interface PageProp {
  className?: String, xtraCss?: String,
  name: String, url: String, component?: ReactElement | undefined;
}

const SideBar:React.FC<Prop> = (props=defaultCmnProp) => {

  const pages: PageProp[] = [
    {name: 'Home', url: '/', component: <IoIosHome className='h-5 min-w-5 '/> },
    {name: 'Shorts', url: '/shorts', component: <SiYoutubeshorts className='h-5 min-w-5'/> },
    {name: 'Subscription', url: '/subscription', component: <MdSubscriptions className='h-5 min-w-5' /> },
    {name: 'Byimaan', url: 'https://subhpb.github.io/Portfolio/', component: <RiJavascriptLine className='h-5 min-w-5'/> },
  ]

  return (
    <div className={`side-bar w-full lg:h-[100%] py-3 lg:px-3 lg:w-fit flex flex-row justify-around items-center lg:justify-start lg:gap-6 lg:flex-col ${props.className} ${props.xtraCss}`}>
      {
        pages.map( (page, ind) => <Page key={ind} {...page} />)
      }
    </div>
  );
};

const Page: React.FC<PageProp> = ({className='',xtraCss='', name,url, component}) => {

  return (
    <div className={`side-bar-page cursor-pointer flex flex-col justify-center items-center ${className} ${xtraCss} `}>
      {component}
      <p className='text-sm'>{name}</p>
    </div>
  )
}

export default SideBar;