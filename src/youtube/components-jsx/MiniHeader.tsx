/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { CmnProps } from '../assists-jsx/Assists';

function MiniHeader({className=' ', xtraCss='', children} : CmnProps<any>) {
  return (
    <div className={`mini-header ${className} ${xtraCss}`}>
      
    </div>
  )
};

export const Genre: React.FC<CmnProps<string>> = ({className='p-4 font-semibold text-lg', xtraCss='', source}) => {

    if (!source) return <></>;

    return (
        <div className={`genre ${className} ${xtraCss}`}>{source}</div>
    );
};

export const Genres: React.FC<CmnProps<string[]>> = ({className=' ', xtraCss='', source}) => {

    if (!source) return <></>;

    return (
        <div className={`genres ${className} ${xtraCss}`}>

        </div>
    )

};



export default MiniHeader;
