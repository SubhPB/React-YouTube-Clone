/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { useState } from 'react';

interface ParaTS {
    className ?: string,
    xtraCss ?: string,
    children ?: React.ReactNode,
    source ?: string | null ,
    isLoading ?: boolean,
    isSmall ?: boolean,
    textSize ?: string,
};

function Paragraph({className='', xtraCss=' sm-card-p-tag', source, isLoading, textSize='text-sm'}: ParaTS) {

    const [zoom, setZoom] = useState(false);

    if (isLoading){
        return <div className='w-full rounded-[12px] bg-zinc-700 min-h-[5vmin]'></div>
    };

    const PLines = source?.split('\n').map( (line:string, index: number) => <div key={index} className=''>{line}</div>)

    return (
        <div onClick={ () => setZoom(!zoom) } className={`dsc-para w-full p-2 bg-zinc-800 rounded-[12px] ${className}`}>
            <p className={`${textSize} ${ !zoom && xtraCss }`}>{PLines}</p>
        </div>
    );
}

export default Paragraph;