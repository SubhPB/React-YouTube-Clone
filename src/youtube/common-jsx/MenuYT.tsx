/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactElement, ReactNode } from 'react';
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { menuData } from '../assists-jsx/data';
import { useNavigate } from 'react-router-dom';


const MenuYT: React.FC<{xtraCss?: string}> = ({xtraCss=''}) => {

    const navigate = useNavigate();

    const migrate = (url: string) => {
        navigate(url);  
    };

    return (
        <div className={'absolute h-[93.6vh] lg:h-[91vh] min-w-[22vmax] bg-zinc-900 z-[5] top-[107%] left-[0%] overflow-scroll scrollbar-hide'+ xtraCss}>
            <div className="top-menu-items w-full py-2">
                <Section name='General'>
                    <MenuItem component={<AiFillHome />} name='Home'/>
                    <MenuItem component={<SiYoutubeshorts />} name='Shorts'/>
                    <MenuItem component={<MdSubscriptions />} name='Subscription'/>
                </Section>
                {
                    menuData.map( (section, secInd) => (
                        <Section key={secInd} name={section.sectionName}>
                            {
                                section.menuItems.map( (menuItem, itemInd) => (
                                    <MenuItem key={`${menuItem.itemName}-&-${itemInd}`} component={menuItem.component} name={menuItem.itemName} handleClick={migrate} parentName={section.sectionName}/>
                                ))
                            }
                        </Section>
                    ) )
                }
            </div>
        </div>
  )
};

interface Prop {
    className ?: string, xtraCss ?: string,
    component ?: ReactElement, name ?: String | undefined,
    children ?: ReactNode, handleClick ?: (url: string) => void,
    parentName ?: string,
};


const MenuItem: React.FC<Prop> = ({className=' ', xtraCss=' ',component, name, handleClick= () => {}, parentName}) => {

    const handleNavigation = () => {
        
        handleClick(`/${parentName ? parentName?.toLowerCase() + '/' + name?.toLowerCase() : name?.toLowerCase()}`)
    }

    return (
        <div className={`menu-item flex items-center px-2 gap-2 py-1 cursor-pointer hover:bg-zinc-500 rounded-[20px]  ${className} ${xtraCss}`} onClick={handleNavigation}>
            {component}
            <p className='text-[15px] font-semibold'>{name}</p>
        </div>
    )
};

const Section: React.FC<Prop> = ({className='', xtraCss='', children, name}) => {

    return (
        <div className={`section pt-2 pb-4 border-b-[.75px] border-zinc-700 flex flex-col gap-[1.2vmax] ${className} ${xtraCss}`}>
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