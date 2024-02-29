/* -- BYIMAAN -> THE FUTURE -- */

import React, {useEffect} from 'react'
import { CmnProps } from '../../assists-jsx/Assists'
import { useNavigate, useParams } from 'react-router-dom'
import { render } from '@testing-library/react';

const Watch: React.FC<CmnProps<any>> = ({className='', xtraCss='', callBackFunc= function(val:boolean){}}) => {

    const {videoId} = useParams();
    const navigate = useNavigate();

    useEffect( function componentDidMount(){

        const renderSideBar = true;
        // this callBackFunc will remove the SideBar from the UI...
        callBackFunc(!renderSideBar);

        return function componentWillUnMount(){
            // this will rerenders the sidebar at the UI...
            callBackFunc(renderSideBar);
        };
    }, []);

    if (!videoId) {
        navigate(-1);
        return <></>;
    };

    return (
        <div className={`watch-yt flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm bg-zinc-600 ${className} ${xtraCss}`}>
            This is the video id {videoId}
        </div>
    );
};

export default Watch
