/* -- BYIMAAN -> THE FUTURE -- */

import React, {ReactNode} from "react";
import defaultImg from '../../src-static/images/yt-logo-mobile.png';
import { useState } from "react";

export interface CmnProps<srcT> {
    className?: string,
    xtraCss?: string,
    children ?: ReactNode | undefined,
    source ?: srcT,
    onClick?: Function,
    loading ?: boolean,
    callBackFunc ?: Function,
    url ?: string,
    handleClick ?: Function,

    // callBackFunc for componentDidMount to be used in useEffect if needed...
    componentDidMount ?: Function,

    // callBackFunc for componentWillUnMount
    componentWillUnMount ?: Function;
};

export const defaultCmnProp:CmnProps<string> = {className:" ", xtraCss:" ", source: undefined, onClick: function(){}}

export const Img: React.FC<CmnProps<string>> = ({ className=" h-full w-full auto-img ", xtraCss=" ", source=undefined, onClick= () => {}, loading}) => {

    const [error, setError] = useState<boolean>(false);

    // const handleImgErr = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    //     e.currentTarget.src = defaultImg;
    // }; 

    if (loading || error) return <div className={` bg-zinc-700 w-full h-full ${xtraCss}`}  ></div>

    return (
        <>
        {source && <img onClick={() => onClick()} src={` ${source} `} className={` ${className} ${xtraCss} `} alt="-img-byi" onError={() =>setError(true)} />}
        </>
    );
};
