/* -- BYIMAAN -> THE FUTURE -- */

import React, { useEffect, useRef, useState} from 'react'
import { CmnProps } from '../../assists-jsx/Assists';
import FlexContainer from '../../assists-jsx/FlexContainer';
import { ApiResponse } from '../../assists-jsx/apiInterfaces';
import searchDemoData from '../../../youtube/assists-jsx/searchDemoData.json'
import { VideoCardYT } from '../../components-jsx/VideoCardYT.tsx/VideoCardYT';

// import PublisherData from './PublisherData';
import { useSelector } from 'react-redux';
import { selectRelatedContent } from '../../../redux-YT/features/video/related-content/selectors';

interface State{
    incOffsetTop : number,
    reference: HTMLElement |null,
    commentDiv: HTMLElement | null,
};
const defaultState = { incOffsetTop: Infinity, reference: null, commentDiv: null };

const RelatedContent : React.FC<CmnProps<any>> = ({className='', xtraCss='', children}) => {

    // const _data: ApiResponse = searchDemoData as ApiResponse;
    // const [data, error, isLoading] = [ _data , '', false ];

    const [ state , setState] = useState<State>(defaultState);
    const parentRef = useRef<HTMLDivElement>(null);

    const {data, error, isLoading} = useSelector(selectRelatedContent)

    useEffect( function didMount(){ 
        const reference = parentRef?.current as HTMLElement;
        const commentDiv = reference?.querySelector('.vid-comments') as HTMLElement;
        if (reference && commentDiv){
             setState({
                ...state,
                incOffsetTop: commentDiv.offsetTop - reference.offsetTop,
                reference: reference,
                commentDiv: commentDiv
             }); 
        };
        
    }, [] )

    useEffect( function didUpdate(){
        
        const { incOffsetTop, reference, commentDiv } = state;

        const handleScroll = () => {
            // const childInclusiveOffsetTop = commentDiv?.offsetTop - reference?.offsetTop;
            if (incOffsetTop && reference && commentDiv){
                const triggerEvent = state.incOffsetTop <= reference.scrollTop + 2;
                if (triggerEvent && !Array.from(commentDiv.classList).includes('fixed')){
                    commentDiv.classList.add('fixed');
                };

                if (!triggerEvent && Array.from(commentDiv.classList).includes('fixed')){
                    commentDiv.classList.remove('fixed');
                };
            }
        };

        if (incOffsetTop && reference && commentDiv){
            reference.addEventListener('scroll',handleScroll)
        };

        return function willUnMount(){
            if (incOffsetTop && reference && commentDiv){
                commentDiv.classList.remove('fixed');
                reference.removeEventListener('scroll', handleScroll)
            };
        };
    }, [state.incOffsetTop]);
    

    return (
        <div ref={parentRef} className={`related-content ${className} ${xtraCss}`}>
            {children}
            <FlexContainer>
            {
                data?.contents?.map( ( contentData, index ) => (
                    contentData?.type === 'video' && <VideoCardYT key={index} source={contentData?.video} isLoading={isLoading} isSmall={true}/>
                ))
            }
            </FlexContainer>
        </div>
    )
};

export default RelatedContent;
