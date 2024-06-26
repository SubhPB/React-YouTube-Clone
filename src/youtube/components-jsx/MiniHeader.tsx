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

export const Genre: React.FC<CmnProps<string>> = ({className='py-2 px-3 font-semibold text-xs bg-zinc-800 rounded-[10px] cursor-pointer snap-start ', xtraCss='', source='Byimaan', url, children, loading, handleClick}) => {

    const navigate = useNavigate();

    if (!source) return <></>;
    if (loading) return <div className={`genre ${className} ${xtraCss} whitespace-nowrap min-h-7 min-w-10`}>  </div>

    const clicked = () => { 
      if (url) navigate(url + source );
      if (handleClick) handleClick();
    };

    return (
        <div onClick={clicked} className={`genre ${className} ${xtraCss} whitespace-nowrap`}> {children} {source} </div>
    );
};

export const Genres: React.FC<CmnProps<string[]>> = ({className='fixed z-[5] flex bg-zinc-900 p-2 gap-2 flex-shrink-0 w-full overflow-x-scroll scrollbar-hide ', xtraCss='', source, loading, url}) => {

    if (!source || source?.length === 0 ) return <></>;

    return (
        <div className={`genres snap-x snap-mandatory ${className} ${xtraCss}`}>
            {
                source?.map( (genre, index) => <Genre key={index} source={genre} loading={loading} url={url}/>)
            }
        </div>
    )

};



export default MiniHeader;
