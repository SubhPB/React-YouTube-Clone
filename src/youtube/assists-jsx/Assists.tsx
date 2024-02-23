/* -- BYIMAAN -> THE FUTURE -- */

import React, {ReactNode} from "react"

export interface CmnProps {
    className?: String,
    xtraCss?: String,
    children ?: ReactNode | undefined,
    source ?: String,
    onClick ?: Function,
};

export const defaultCmnProp:CmnProps = {className:" ", xtraCss:" ", source: undefined, onClick: function(){}}

export const Img: React.FC<CmnProps> = ({ className=" h-full w-full auto-img ", xtraCss=" ", source=undefined, onClick= () => {}}) => {
    return (
        <>
        {source && <img onClick={onClick()} src={` ${source} `} className={` ${className} ${xtraCss} `} alt="-img-byi" />}
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