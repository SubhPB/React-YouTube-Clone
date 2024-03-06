/* -- BYIMAAN -> THE FUTURE -- */

import React, {ReactNode} from "react";
import defaultImg from '../../src-static/images/yt-logo-mobile.png';

export interface CmnProps<srcT> {
    className?: string,
    xtraCss?: string,
    children ?: ReactNode | undefined,
    source ?: srcT,
    onClick?: Function,
    loading ?: boolean,
    callBackFunc ?: Function,
    url ?: string,

    // callBackFunc for componentDidMount to be used in useEffect if needed...
    componentDidMount ?: Function,

    // callBackFunc for componentWillUnMount
    componentWillUnMount ?: Function;
};

export const defaultCmnProp:CmnProps<string> = {className:" ", xtraCss:" ", source: undefined, onClick: function(){}}

export const Img: React.FC<CmnProps<string>> = ({ className=" h-full w-full auto-img ", xtraCss=" ", source=undefined, onClick= () => {}, loading}) => {

    const handleImgErr = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = defaultImg;
    }; 

    if (loading) return <div className={` bg-zinc-600 ${className} ${xtraCss} `}  ></div>

    return (
        <>
        {source && <img onClick={onClick()} src={` ${source} `} className={` ${className} ${xtraCss} `} alt="-img-byi" onError={handleImgErr} />}
        </>
    );
};


// export const Div: React.FC<CmnProps> = (props=defaultCmnProp) => {
//     return (
//         <div onClick={} className={`_div ${props.className} ${props.xtraCss}`} >
//             {props.children}
//         </div>
//     );
// };