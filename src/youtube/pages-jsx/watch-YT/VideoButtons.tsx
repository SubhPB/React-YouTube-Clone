/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactElement } from 'react';

export interface videoBtnTS {
    text : string, icon : ReactElement, onClick ?: Function
};

export function VideoBtn( {text, icon, onClick} : videoBtnTS ): ReactElement {

    const handleClick = () => {
        if (onClick){ onClick() };
    } 

    return (
        <div onClick={ handleClick } className="video-btn flex jusitfy-around gap-2 items-center text-[11px] font-semibold">
            {icon}
            {text}
        </div>
    )
};