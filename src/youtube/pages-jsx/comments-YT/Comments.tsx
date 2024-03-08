/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';

export interface CommentTS <C> {
    className ?: string,
    xtraCss ?: string,
    children ?: React.ReactNode,
    src ?: C,
    onClick ?: Function;
    isLoading ?: boolean
};

const CommentsYT:React.FC<CommentTS<any>> = ( { className='', xtraCss='', children, src, isLoading } ) => {

    return(
        <div className={`yt-comments ${className} ${xtraCss}`}>

        </div>
    );
};

export default CommentsYT;
