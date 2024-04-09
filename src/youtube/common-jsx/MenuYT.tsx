/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactElement, ReactNode } from 'react';
import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { menuData } from '../assists-jsx/data';
import { useNavigate } from 'react-router-dom';
import { _MenuItem } from '../assists-jsx/data';


const MenuYT: React.FC<{xtraCss?: string}> = ({xtraCss=''}) => {

    const navigate = useNavigate();

    const handleClick = (menuItem: _MenuItem ) => {
        if (menuItem?.url) {
            navigate(menuItem.url);
        } else if (menuItem?.onClick){
            menuItem.onClick();
        }
    }

    return (
        <div className={'absolute h-[93.6vh] lg:h-[91vh] min-w-[22vmax] bg-zinc-900 top-[107%] left-[0%] overflow-scroll scrollbar-hide z-[10]'+ xtraCss}>
            <div className="top-menu-items w-full py-2">
                <Section name='General'>
                    <MenuItem component={<AiFillHome />} name='Home' onClick={() => navigate('/')}/>
                    <MenuItem component={<MdSubscriptions />} name='Subscription' onClick={() => navigate('/user/general/subcriptions')}/>
                </Section>
                {
                    menuData.map( (section, secInd) => (
                        <Section key={secInd} name={section.sectionName}>
                            {
                                section.menuItems.map( (menuItem, itemInd) => (
                                    <MenuItem key={`${menuItem.itemName}-&-${itemInd}`} component={menuItem.component} name={menuItem.itemName} parentName={section.sectionName} onClick={() => handleClick(menuItem)}/>
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
    children ?: ReactNode, onClick ?: Function,
    parentName ?: string,
};


const MenuItem: React.FC<Prop> = ({className=' ', xtraCss=' ',onClick= () => {},component, name}) => {

    return (
        <div onClick={() => onClick()} className={`menu-item flex items-center px-2 gap-2 py-1 cursor-pointer hover:bg-zinc-500 rounded-[14px]  ${className} ${xtraCss}`}>
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
