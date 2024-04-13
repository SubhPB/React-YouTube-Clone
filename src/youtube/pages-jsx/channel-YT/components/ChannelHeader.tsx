/* -- BYIMAAN -> THE FUTURE -- */

import React, {useState} from 'react';
import { ChnlProp } from '../ChannelTS';
import { Data } from '../ChannelTS';
import { Img } from '../../../assists-jsx/Assists';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Paragraph from '../../Description-YT/Paragraph';

import { selectSubcribedChannelsId } from '../../../../redux-YT/features/channel/subcriptions/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../redux-YT/app/store';
import { unSubcribeChnl, subcribreChnl } from '../../../../redux-YT/features/channel/subcriptions/slice';

const ChannelHeader: React.FC<ChnlProp<Data>> = ({className='', xtraCss='', src, isLoading}) => {

  const channelId = src?.channelId;

  const appDispatch = useAppDispatch();
  const subcribedChnlsIds = useSelector( selectSubcribedChannelsId );
  const thisChnlIsSubcribed = subcribedChnlsIds.includes(channelId ?? 'N/A');

  function SubcribeBtn({clsName='', sizeCss=''}){

    return (
      <p onClick={ () => [channelId && (thisChnlIsSubcribed ? appDispatch( unSubcribeChnl({id: channelId})) : appDispatch( subcribreChnl({id: channelId})))] }
        className={` py-1 px-2 font-bold text-md rounded-[22px] text-black ${clsName} ${sizeCss} ${thisChnlIsSubcribed ? 'bg-zinc-400' : 'bg-zinc-100' }`}>
         { thisChnlIsSubcribed ? 'Subcribed' : 'Subcribe' } 
      </p>
    );
  }

  return (
    <div className={`chnl-header w-full  ${className} ${xtraCss}`}>

      {/* -- Banner -- */}
      <div className="chnl-banner w-full h-[25vmin]">
        <Img source={src?.banner?.desktop?.at(-1)?.url} className='w-full h-full object-scale-down' loading={isLoading}  />
      </div>

      {/* -- Channel Details -- */}
      <div className="chnl-details w-full flex my-2">

        {/* -- Chnl Img (Left-Side) -- */}
        <div className="chnl-img h-full flex items-center shrink-0 overflow-hidden">
          <Img className='h-[22vmin] w-[22vmin] rounded-full' source={src?.avatar?.[0]?.url} loading={isLoading}/>
        </div>

        {/* -- Chnl Info (Right-Side) -- */}
        <div className="chnl-info flex-grow-[1] pl-2 ">
          {
            isLoading ?
              <div className="h-full w-full">
                <div className="line1 w-[80%] h-8 bg-zinc-700" />
                <div className="line2 w-[52%] h-6 bg-zinc-700 mt-2" />
              </div> 
            : <div>
                <p className='text-2xl font-bold flex gap-1'>{src?.title} { src?.badges?.[0]?.text === 'Verified' && <RiVerifiedBadgeFill className='text-sm'/>}</p>
                <p className='text-sm font-light flex opacity-[.8]'>{`@${src?.title.toLowerCase()} `}  {src?.stats?.subscribersText} </p>
                <Paragraph className='hidden my-1 lg:block' source={ src?.artistBio ?? src?.description } xtraCss=' card-p-tag' textSize='text-xs'/>
                <SubcribeBtn clsName='hidden lg:block' sizeCss='w-fit'/>
              </div>
          }
        </div>

      </div>

      <Paragraph className='lg:hidden' source={src?.description} xtraCss=' card-p-tag' isLoading={isLoading} />
      <SubcribeBtn clsName='lg:hidden' sizeCss='w-full text-center'/>

    </div>
  )
};

const MemoizedChnlHeader = React.memo(ChannelHeader) 

export default MemoizedChnlHeader;
