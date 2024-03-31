/* -- BYIMAAN -> THE FUTURE -- */

import { VideoDetailApiResponse } from '../../assists-jsx/videoDetailTs';
import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import VideoDetailsDemo from '../../assists-jsx/videoDetailDemo.json';
import Paragraph from './Paragraph';
import { Img } from '../../assists-jsx/Assists';
import { intToText } from '../../assists-jsx/funcs';

interface vidDetailTS {
    className ?: string,
    xtraCss ?: string,
    children ?: React.ReactNode,
    source ?: VideoDetailApiResponse | null ,
    isLoading ?: boolean,
    isSmall ?: boolean
};

const [ data, loading ] : [VideoDetailApiResponse, boolean] = [VideoDetailsDemo as VideoDetailApiResponse, false]

const VidDescription: React.FC<vidDetailTS>  = ({className='', xtraCss='', source=data, isLoading=loading}) => {
   const navigate = useNavigate();

  return (
    <div className={`vid-dsc ${className} ${xtraCss}`}>

        <div className="dsc-head w-full text-nowrap font-bold p-3 flex justify-between border-b-[1.1px] border-zinc-200 ">
            Description
            <RxCross1 className='cursor-pointer' onClick={ () => navigate(-1) }/>
        </div>

        <div className="dsc-body w-full p-3">

            <div className="dsc-title font-bold text-nowrap text-md">
                {source?.title}
            </div>

        </div>

        {
            source?.stats && <VidStats
             src={Object.entries(source?.stats).map(
                 ([k, v]:string[] ) => ({statName : ''+k, statData: ''+v}) 
             )}
            />
        }

        <Paragraph source={source?.description} isLoading={isLoading}/>

        <div className="author-dsc w-full py-2 flex gap-2 items-center">
            <Img className='min-h-4 min-w-4 ' source={source?.author?.avatar?.[0]?.url}/>
            <div className="dsc-athr">
                <p className='text-md'> {source?.author?.title} </p>
                <p className='text-xs opacity-[.8] '>{source?.author?.stats?.subscribersText}</p>
            </div>
        </div>

    </div>
  )
};

interface VidStat {
    statName: string,
    statData: string
}

const VidStats:React.FC<{src: VidStat[]}> = ({src=[]}) => {

    const VidStat: React.FC<VidStat> = ({statData='',statName=''}) => {
        return (
            <div className="vid-stat text-center">
                <h2 className='font-bold'>{intToText(Number(statData))}</h2>
                <h5 className='opacity-[.8]'>{statName}</h5>
            </div>
        )
    };

    return (
        <div className="vid-stats w-full flex justify-around py-1 cursor-default">
            {
                src?.map( (stat, ind) => <VidStat statData={stat?.statData} statName={stat?.statName} /> )
            }
        </div>
    );
};

export default VidDescription;
