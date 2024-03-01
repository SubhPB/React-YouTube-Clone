/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react'
import { CmnProps } from '../../assists-jsx/Assists';
import { Video } from '../../assists-jsx/apiInterfaces';
import { _Thumbnail } from '../../components-jsx/VideoCards';
import { VideoDesc } from '../../components-jsx/VideoCards';
import FlexContainer from '../../assists-jsx/FlexContainer';
import { ApiResponse } from '../../assists-jsx/apiInterfaces';
import searchDemoData from '../../../youtube/assists-jsx/searchDemoData.json'

const RelatedContent : React.FC<CmnProps<any>> = ({className='', xtraCss=''}) => {

    const _data: ApiResponse = searchDemoData as ApiResponse;
    // const contents: Content[] | undefined = _data?.contents;
    const [data, error, isLoading] = [ _data , '', false ]

    const flexContainerDidMount = (DIV:HTMLDivElement) => {
        DIV.querySelectorAll('.channel-img').forEach( div => {
            if (div instanceof HTMLElement) {
                div.style.display = 'none';
            }
        });
    };

    const flexContainerWillUnMount = (DIV:HTMLDivElement) => {
        DIV.querySelectorAll('.channel-img').forEach( div => {
            if (div instanceof HTMLElement) {
                div.style.display = 'block';
            }
        });
    };
  
    return (
        <div className={`related-content bg-slate-500 ${className} ${xtraCss}`}>
        <FlexContainer componentDidMount={flexContainerDidMount} componentWillUnMount={flexContainerDidMount}>
        {
            data?.contents?.map( ( contentData, index ) => (
                <SmallVideoCard key={index} source={contentData?.video} loading={isLoading}/>
            ))
        }
        </FlexContainer>
        </div>
    )
};

const SmallVideoCard: React.FC<CmnProps<Video>> = ({className='', xtraCss='', source, loading=true}) => {
    return (
        <div className={`sm-vid-card min-h-[25vh] w-full my-1 cursor-default flex justify-between ${className} ${xtraCss}`}>
            <_Thumbnail className='h-[23vh] w-[42vh] mr-1' xtraCss='' source={source} loading={loading}/>
            <VideoDesc className='flex-grow-[1]' xtraCss='' source={source} loading={loading} />
        </div>
    )
};

export default RelatedContent;
