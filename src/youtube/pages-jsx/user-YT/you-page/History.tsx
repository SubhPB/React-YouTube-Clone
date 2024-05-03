/* -- BYIMAAN -> THE FUTURE -- */

import { UserProp } from '../User';
import FlexContainer from '../../../assists-jsx/FlexContainer';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { VideoCardYT } from '../../../components-jsx/VideoCardYT.tsx/VideoCardYT';
import { selectVideosFromHistory } from '../../../../redux-YT/features/history/selectors';
import { useSelector } from 'react-redux';

function History({className='',xtraCss='' }: UserProp) {

    const data = useSelector( selectVideosFromHistory );

    return (
        <div className={`history h-full w-full ${className} ${xtraCss}`}>
            <YouPageHeader text='History'/>
            {
              (data.length === 0 ) ? 
               <NoYouPageData text='No History has been Saved!'/>
               :   
                <FlexContainer  xtraCss={`pl-6`} >
                        {
                            data?.map( ( contentData, index ) => (
                                contentData?.type === 'video' && <VideoCardYT key={index} source={contentData?.video} isLoading={false} isSmall={true}/>
                            ))
                        }
                </FlexContainer> 
            }
        </div>
    );
};

export function YouPageHeader({text=''}) {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className="p-3 flex w-full items-center ">
            <IoMdArrowRoundBack onClick={goBack} className='h-5 w-5 font-semibold cursor-pointer'/>
            <h1 className='ml-4 text-lg font-semibold cursor-default'> {text} </h1>
        </div>
    );
};

export function NoYouPageData({text=''}){
    return (
        <div className="h-full w-full grid items-center ">
            <div className="">
                <h2 className='opacity-[.9] font-semibold text-2xl text-center'> BYIMAAN - Meet Future.</h2>
                <h2 className='opacity-[.8] font-semibold text-2xl text-center' >{text}</h2>
            </div>
        </div>
    )
};

export default History
