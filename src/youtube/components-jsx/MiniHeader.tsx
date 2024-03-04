/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { CmnProps } from '../assists-jsx/Assists';
import { useNavigate } from 'react-router-dom';

function MiniHeader({className=' ', xtraCss='', children} : CmnProps<any>) {
  return (
    <div className={`mini-header ${className} ${xtraCss}`}>
      {children}
    </div>
  )
};

export const Genre: React.FC<CmnProps<string>> = ({className='py-2 px-3 font-semibold text-sm bg-zinc-600 rounded-[10px] cursor-pointer', xtraCss='', source='Byimaan'}) => {

    const navigate = useNavigate();

    if (!source) return <></>;

    const handleClick = () => { navigate('/query/ ' + source ) };

    return (
        <div onClick={handleClick} className={`genre ${className} ${xtraCss} whitespace-nowrap`}>{source}</div>
    );
};

export const Genres: React.FC<CmnProps<string[]>> = ({className='fixed z-[5] flex bg-zinc-900 p-2 gap-2 flex-shrink-0 w-full overflow-x-scroll scrollbar-hide ', xtraCss='', source}) => {

    if (!source || source?.length === 0 ) return <></>;

    return (
        <div className={`genres ${className} ${xtraCss}`}>
            {
                source?.map( (genre, index) => <Genre key={index} source={genre}/>)
            }
        </div>
    )

};



export default MiniHeader;
