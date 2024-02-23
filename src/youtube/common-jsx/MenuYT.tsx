/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactElement, ReactNode } from 'react';
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";


const MenuYT: React.FC<{xtraCss?: string}> = ({xtraCss=''}) => {
  return (
    <div className={'absolute min-h-[92vh] min-w-[22vmax] bg-zinc-900 z-[5] top-[107%] left-[0%] '+ xtraCss}>
        <div className="top-menu-items w-full py-2">
            <Section >
                <MenuItem component={<AiFillHome />} name='Home'/>
                <MenuItem component={<SiYoutubeshorts />} name='Shorts'/>
                <MenuItem component={<MdSubscriptions />} name='Subscription'/>
            </Section>
        </div>
    </div>
  )
};

interface Prop {
    className ?: string, xtraCss ?: string,
    component ?: ReactElement, name ?: string,
    children ?: ReactNode
};


const MenuItem: React.FC<Prop> = ({className=' ', xtraCss=' ',component, name}) => {
    return (
        <div className={`menu-item flex items-center gap-4 cursor-pointer  ${className} ${xtraCss}`}>
            {component}
            <p className='text-[15px] font-semibold'>{name}</p>
        </div>
    )
};

const Section: React.FC<Prop> = ({className='', xtraCss='', children, name}) => {

    return (
        <div className={`section py-2 border-b-[.75px] border-zinc-400 flex flex-col gap-[1.2vmax] ${className} ${xtraCss}`}>
            {name && (
                <div className='section-title flex gap-2 items-center cursor-default'>
                    <h2 className='font-semibold opacity-[.9] text-xl'>{name} </h2>
                    <FaAngleRight />
                </div>
                )
            }
            {children}
        </div>
    )
};

export default MenuYT;
