/* -- BYIMAAN -> THE FUTURE -- */


import React, {ReactNode} from "react";
import {Img} from '../../assists-jsx/Assists';
import YTlogo from '../../../src-static/images/yt-logo.png';
import { Avatar, Video } from '../../assists-jsx/apiInterfaces';
import moment from 'moment';
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { VideoCardElem } from "../../../src-utils/dataTypes";

export const VideoCard:React.FC<VideoCardElem<Video>> = ({className='', xtraCss='', source, loading=true, children}) => {
    return (
        <div className="video-card">
            {children}
        </div>
    )
};
    