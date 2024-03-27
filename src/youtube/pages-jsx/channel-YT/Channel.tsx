/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactElement, useEffect, useState } from 'react';
import { ChnlProp } from './ChannelTS';
import { Data } from './ChannelTS';
import { data } from './ChannelTS';
import MemoChannelHeader from './components/ChannelHeader';
import { ChnlHome } from './components/ChannelHome';
import { ChnlCommunity } from './components/ChannelCommunity';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import ChnlSearch from './components/ChannelSearch';
import { IoSearch } from "react-icons/io5";

import { useAppDispatch } from '../../../redux-YT/app/store';
import { useSelector } from 'react-redux';
import { fetchChnlDetailsAction } from '../../../redux-YT/features/channel/chnlDetails/detailAction';
import { chnlDetailsStateSelector } from '../../../redux-YT/features/channel/chnlDetails/detailSelectors';

type HOME = 'HOME'; type COMMUNITY = 'COMMUNITY'; type SEARCH = 'SEARCH';
type RouteType = HOME | COMMUNITY | SEARCH;

function Channel({className='', xtraCss='',}: ChnlProp<null>): ReactElement {


    // why we using this useState (routeState):
    //      to avoid the unnecessary rerendering of the same UI with same data.
    //      Suppose if user first click to community. while staying at the Community we reclicked on Community
    const [routeState, setRouteState] = useState<RouteType>("HOME");
    const channelDetails = data as Data, isLoading = false;

    // ---- thunk ----
    // const {channelId} = useParams();
    // const appDispatch = useAppDispatch();
    // const {data: channelDetails, error, isLoading} = useSelector( chnlDetailsStateSelector );
    
    // useEffect( function didUpdate(){
    //     if (channelId) appDispatch( fetchChnlDetailsAction(channelId) );
    // }, [appDispatch, channelId])

    return (
        <div className={`flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm p-2 ${className} ${xtraCss}`}>
            <MemoChannelHeader src={channelDetails ?? undefined } isLoading={isLoading}/>
            <SwitchRoute callBackFunc={() => [routeState, setRouteState]}/>

            <Routes>
                <Route path='/' element={<ChnlHome/>}/>
                <Route path='/home' element={<ChnlHome/>}/>
                <Route path='/community' element={<ChnlCommunity/>}/>
                <Route path='*' element={<ChnlHome/>}/>
                <Route path='search/:searchQuery' element={<ChnlSearch />}/>
            </Routes>
        </div>
    );
};

function SwitchRoute ({src=['HOME', 'COMMUNITY'], isLoading, callBackFunc= () => [] }:ChnlProp<RouteType[]>) {

    const [currRoute, setRoute] = callBackFunc();
    const navigate = useNavigate();
    const { channelId } = useParams();

    function Navigator( requestedUrl : string, futureRouteState: HOME | COMMUNITY | SEARCH, forcefully: boolean = false ){
        if ( !(futureRouteState === currRoute) || forcefully ){
            navigate(requestedUrl);
            setRoute(futureRouteState)
        };
    };

    function _SearchInput(){

        const [searchQuery, setSearchQuery] = useState<string>('');

        const handleChange: React.ChangeEventHandler<HTMLInputElement> = ( e ) => {
            setSearchQuery(e?.target?.value);
        };
        const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
            
            if (searchQuery.trim().length !== 0 && e.key === 'Enter'){
                Navigator(`/channel/${channelId}/search/${searchQuery.trim()}`, 'SEARCH', true);
                setSearchQuery('');
            };
        };

        return (
            <div className="search-input flex items-center gap-2">
                <IoSearch />
                <input onChange={handleChange} value={searchQuery}
                  className='outline-none border-b-[1px] border-zinc-300 pb-1 text-white bg-transparent'
                  type='text' onKeyDown={handleKeyDown}
                />
            </div>
        )
    };

    return (
        <div className="w-full flex gap-4 my-1 overflow-x-scroll scrollbar-hide">
            {
                src?.map( (route, ind) => (
                    <p onClick={ () => Navigator(`/channel/${channelId}/${route.toLowerCase()}`, route) } key={ind} 
                        className={`text-md p-2 semibold cursor-default ${route === currRoute ? 'border-b-white border-b-[2px] scale-[1]' : '' }`}>
                        {route[0] + route.slice(1).toLowerCase()}
                    </p>) 
                )
            }
            <_SearchInput />
        </div>
    )
};

export default Channel
