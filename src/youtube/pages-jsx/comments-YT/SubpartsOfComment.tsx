/* -- BYIMAAN -> THE FUTURE -- */

import React from "react";
import { CommentTS } from "./Comments";

export const LeftSubComment: React.FC<CommentTS<any>> = ({ className='', xtraCss='', src, isLoading }) => {
    
    return (
        <div className={`left-comment ${className} ${xtraCss}`}>

        </div>
    )
};

export const RightSubComment: React.FC<CommentTS<any>> = ({ className='', xtraCss='', src, isLoading }) => {
    
    return (
        <div className={`right-comment ${className} ${xtraCss}`}>

        </div>
    )
};