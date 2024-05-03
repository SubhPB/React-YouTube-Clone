/* -- BYIMAAN -> THE FUTURE -- */


import { UserProp } from '../User';
import { YouPageHeader, NoYouPageData } from '../you-page/History';
import { Data } from '../../channel-YT/ChannelTS';
import { Img } from '../../../assists-jsx/Assists';
import Paragraph from '../../Description-YT/Paragraph';
import FlexContainer from '../../../assists-jsx/FlexContainer';
import { useAppDispatch } from '../../../../redux-YT/app/store';
import { selectSubcribedChannelsId } from '../../../../redux-YT/features/channel/subcriptions/selectors';
import { selectChannelsByIdsFromHistory, selectChannelsFromHistory } from '../../../../redux-YT/features/history/selectors';
import { useSelector } from 'react-redux';
import { subcribreChnl, unSubcribeChnl } from '../../../../redux-YT/features/channel/subcriptions/slice';

function Subcriptions({className='',xtraCss='' }:UserProp) {

    const subcribedChannelsIds = useSelector( selectSubcribedChannelsId );
    const subcribedChannels = useSelector( selectChannelsByIdsFromHistory(subcribedChannelsIds) );
    const allChannels = useSelector( selectChannelsFromHistory );
    const noData = subcribedChannels.length === 0;

    return (
        <div  className={`subcription h-full w-full  ${className} ${xtraCss}`}>
            <YouPageHeader text='Subcriptions' />
            {
                noData ? <NoYouPageData text='You Have Not Subcribed Any Channel' /> 
                : <FlexContainer className={' flex flex-col w-full h-full flex-shrink-0 gap-2'}  xtraCss={`pl-6`} >
                    {
                        subcribedChannels.map( (chnlData, ind) => <ChannelCard key={ind} src={chnlData} /> )
                    }
                    <p className="my-1 font-semibold"> History of Channels that you visited. </p>
                    {
                    
                        allChannels.map( (chnlData, ind) => <ChannelCard key={ind} src={chnlData} /> )
                    
                    }
                </FlexContainer>
            }
        </div>
    );
};

interface ChnlCardProp{
    src : Data
}

function ChannelCard({src}: ChnlCardProp ) {

    return (
        <div className="chnl-card w-full md:w-[619px]">

            <div className="upper-body my-3 flex">

                {/* chnl Image */}
                <div className="chnl-img h-14 w-14 rounded-full overflow-hidden pr-2">
                    <Img source={src?.avatar?.[0]?.url}  />
                </div>

                {/* Chnl heading */}
                <div className="chnl-heading flex-grow-[1] ">
                    <p className='line-clamp-1 text-ellipsis font-bold text-2xl '>{src?.title}</p>
                    <p className='line-clamp-2 text-ellipsis font-semibold text-sm opacity-[.8]'>{src?.stats?.subscribersText + src?.stats?.videosText}</p>
                </div>

            </div>

            <Paragraph source={src?.artistBio ?? src?.description } />

            <SubcribeButton id={src?.channelId} />            

        </div>
    );
};

interface channelIdProp {
    id : string
}

function SubcribeButton({id}: channelIdProp ) {

    const appDispatch = useAppDispatch();
    const subcribedChannelIds = useSelector( selectSubcribedChannelsId );
    const isSubcribed = subcribedChannelIds.includes(id);

    if (isSubcribed){
        return (
            <div className="subcribe-btn w-full bg-zinc-800 py-2" onClick={() => appDispatch(unSubcribeChnl({id: id}))}>
                <h3 className='font-bold text-zinc-200 text-center'>Subcribed</h3>
            </div>
        )
    };

    return (
        <div className="subcribe-btn w-full bg-zinc-200 py-2" onClick={() => appDispatch(subcribreChnl({id: id}))}>
            <h3 className='font-bold text-zinc-800 text-center'>Subcribe</h3>
        </div>
    )
}

export default Subcriptions;
