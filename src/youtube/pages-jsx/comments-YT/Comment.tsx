/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react'
import { CommentTS } from './Comments'

/* 
In a comment we need two bodies
    -> Left.
        - just the img of the commentator

    -> Right
        # all in flex-col
        - channel name
        - comment ( blah blah ...)
        -> Btns 
            - like, dislike, read the comments of the comment
        - display how many replies     

*/

const Comment:React.FC<CommentTS<any>> = ({ className='', xtraCss='', src, isLoading }) => {
  return (
    <div>
      
    </div>
  )
};




export default Comment
