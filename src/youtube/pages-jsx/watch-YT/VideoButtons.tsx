/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactElement } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

interface videoBtnTS {
    text : string, icon : ReactElement
};



const videoBtns: videoBtnTS[] = [
    {text: '', icon: <AiOutlineLike /> },
    {text: '', icon: <AiOutlineDislike />},
    {text: 'Share', icon: <FaRegShareSquare />},
    {text: 'Download', icon: <FaDownload />},
    {text: 'Byimaan', icon: <FaReact /> }
];

function VideoBtn( {text, icon} : videoBtnTS ): ReactElement {

    return (
        <div className="video-btn flex jusitfy-around gap-2 items-center text-xs font-semibold">
            {icon}
            {text}
        </div>
    )
};

export const videoButtons: ReactElement[] = videoBtns.map( (data: videoBtnTS, index: number) => <VideoBtn key={index} text={data?.text} icon={data?.icon} /> )
