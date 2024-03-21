/* -- BYIMAAN -> THE FUTURE -- */

import React, {useState} from 'react';
import { CommentTS } from './Comments';
import { Comment } from '../../assists-jsx/vidComments';
import { Img } from '../../assists-jsx/Assists';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineChat } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from 'react-icons/ai';
import { intToText } from '../../assists-jsx/funcs';


const CommentYT:React.FC<CommentTS<Comment>> = ({ className='', xtraCss='', src, isLoading }) => {

    const [zoom, setZoom] = useState<boolean>(false);

    if (isLoading){
      return (
        <div className="cmnt-loading flex w-full py-1 gap-1 mb-2">
          <div className="h-6 w-6 rounded-full bg-zinc-700 "></div>
          <div className="line-loads flex-grow-[1]">
            <div className="w-[85%] h-5 bg-zinc-700"></div>
            <div className="w-[60%] h-4 bg-zinc-700 mt-1"></div>
          </div>
        </div>
      );
    };

    return (
      <div className='flex w-full py-1 gap-1'>

        <Img xtraCss='min-h-6 max-h-6 max-w-6 min-w-6 rounded-full' source={src?.author?.avatar?.[0]?.url}/>

        <div className="cmnt-body flex-grow-[1] min-h-4 ">
          <div className="cmnt-header text-nowrap text-xs max-w-full cursor-pointer opacity-[.8]">
            <span>{src?.author?.title}</span>
            <span className='ml-3'>{src?.publishedTimeText}</span>
          </div>

          <div className="cmnt-content w-full cursor-pointer" onClick={() => setZoom(!zoom) }>
            <p className={`text-xs text-semibold ${ zoom && ' sm-card-p-tag' } `}>{src?.content}</p>
          </div>

          <div className="cmnt-stats mt-2 w-full flex gap-3 items-center">
            <div className="cmnt-like flex text-xs items-center cursor-pointer">
              <AiFillLike />
              <p className='text-[.6rem] font-semibold'>{intToText(Number(src?.stats?.votes))}</p>
            </div>

            <AiOutlineDislike className=' cursor-pointer'/>

          </div>

          <div className="replies text-sm font-semibold text-blue-700 mb-2 cursor-pointer">
            <span>{intToText(Number(src?.stats?.replies))}</span>
            <span> Replies </span>
          </div>
        </div>
        
      </div>
    )
};


export default CommentYT
