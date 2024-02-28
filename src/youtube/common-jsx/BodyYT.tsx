/* -- BYIMAAN -> THE FUTURE -- */

import React, { useEffect } from 'react';
import { VideoCard } from '../components-jsx/VideoCards';
import FlexContainer from '../assists-jsx/FlexContainer';
import demoData from '../../youtube/assists-jsx/demoData.json';
import { ApiResponse, Content } from '../assists-jsx/apiInterfaces';
import useFetch from '../../src-utils/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import MiniHeader from '../components-jsx/MiniHeader';
import { Genres } from '../components-jsx/MiniHeader';
import searchDemoData from '../../youtube/assists-jsx/searchDemoData.json'

function BodyYT() {

  const {q} = useParams();

  const _data: ApiResponse = demoData as ApiResponse;
  // const contents: Content[] | undefined = _data?.contents;
  
  const [data, error, isLoading] = [ _data , '', false ]

  // const { data , error, isLoading } = useFetch<ApiResponse>( !q ? 'home/' : `search/?q=${q}`);
  

  if (isLoading || error || !data){
    return (
      <LoadingFlexContainer />
    );
  };
  
  
  return (
    <div className='body-yt flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm '>

      {<MiniHeader>
        <Genres source={ data?.refinements}/>
      </MiniHeader>  }

      { (q !== 'home' && data?.didYouMean ) && <DidYouMean text={data?.didYouMean ?? null} />}

      <FlexContainer>
        {
            data?.contents?.map( ( contentData, index ) => (
                <VideoCard key={index} source={contentData?.video} loading={isLoading}/>
            ))
        }
      </FlexContainer>  
    </div>
  )
};

const LoadingFlexContainer: React.FC<{noOfSkeletons ?: number}> = ({noOfSkeletons=12}) => {
  return (
    <div className='body-yt flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm '>
      <FlexContainer>
        {
          Array(noOfSkeletons).fill("Byimaan").map( (val,index) => <VideoCard key={index} loading={true}/> )
        }
      </FlexContainer>
    </div>
  )
};


const DidYouMean: React.FC<{text ?: string | null}> = ({text=null}) => {

  const navigate = useNavigate();
  if (!text) return <></>;

  const makeNewSearch = () => {
    navigate(`/query/${text}`)
  };

  return (
    <div className={`did-you-mean w-full my-4 pl-6 `}>
      <p className='font-semibold inline-block opacity-[0.7]'> Did you mean </p>
      <p onClick={makeNewSearch} className='font-bold text-[#0066ff8e] inline-block pl-4 cursor-pointer'> {text} </p>
    </div>
  )
}

export default BodyYT
