/* -- BYIMAAN -> THE FUTURE -- */

import React, { useEffect } from 'react';
import FlexContainer from '../assists-jsx/FlexContainer';
import { useNavigate, useParams } from 'react-router-dom';
import MiniHeader from '../components-jsx/MiniHeader';
import { Genres } from '../components-jsx/MiniHeader';
import { VideoCardYT } from '../components-jsx/VideoCardYT.tsx/VideoCardYT';
import { homeStateSelector } from '../../redux-YT/features/home/homeSelectors';
import { fetchHomeDataAction } from '../../redux-YT/features/home/homeSliceActions';
import { useAppDispatch } from '../../redux-YT/app/store';
import { useSelector } from 'react-redux';

interface CompPropTs {
  xtraProp ?: any;
}

function BodyYT({xtraProp = ''}: CompPropTs) {

  const {q} = useParams();
  /*  --- Redux + Thunk ---  */
  const appDispatch = useAppDispatch();
  const { data, error, isLoading } = useSelector( homeStateSelector );

  useEffect( function mount(){
    if (q || !data) appDispatch(fetchHomeDataAction( { query : q } ));
  }, [appDispatch, q]);

  if (isLoading || error || !data){
    return (
      <LoadingFlexContainer />
    );
  };
  
  
  return (
    <div className='body-yt flex-grow-[1] max-h-dvh overflow-y-scroll md:scrollbar-cstm lg:scrollbar-cstm '>

      { 
        data?.refinements && (
        <MiniHeader>
          <Genres source={ data?.refinements} url={'/query/'}/>
        </MiniHeader> )
      }

      { (q !== 'home' && data?.didYouMean ) && <DidYouMean text={data?.didYouMean ?? null} />}

      <FlexContainer>
        {
            data?.contents?.map( ( contentData, index ) => (
              contentData?.type === 'video' && <VideoCardYT key={index} source={contentData?.video} isLoading={isLoading} />
            ))
        }
      </FlexContainer>  
    </div>
  )
};

export const LoadingFlexContainer: React.FC<{noOfSkeletons ?: number}> = ({noOfSkeletons=12}) => {
  return (
    <div className='body-yt flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm '>
      <FlexContainer>
        {
          Array(noOfSkeletons).fill("Byimaan").map( (val,index) => <VideoCardYT key={index} isLoading={true} source={null}/> )
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
};

export default BodyYT
