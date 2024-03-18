/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactElement, useState} from 'react';
import { ChnlProp } from './ChannelTS';
import { Data } from './ChannelTS';
import { data } from './ChannelTS';
import ChannelHeader from './components/ChannelHeader';
import { ChnlHome } from './components/ChannelHome';
import { ChnlCommunity } from './components/ChannelCommunity';
import { Routes, Route } from 'react-router-dom';
import { ChannelSearch } from './components/ChannelSearch';


type HOME = 'HOME'; type COMMUNITY = 'COMMUNITY';
type RouteType = HOME | COMMUNITY

function Channel({className='', xtraCss='',}: ChnlProp<null>): ReactElement {

    const [routeState, setRouteState] = useState<RouteType>("HOME");
    const channelDetails = data as Data, isLoading = false;

    function ChnlBody(): React.ReactElement {
        switch (routeState) {
            case 'HOME': return <ChnlHome ChnlData={data}/>;
            case 'COMMUNITY': return <ChnlCommunity />;
            default: return <ChnlHome />;
        };
    };


    return (
        <div className={`flex-grow-[1] max-h-dvh overflow-y-scroll lg:scrollbar-cstm p-2 ${className} ${xtraCss}`}>
            <ChannelHeader src={channelDetails} isLoading={isLoading}/>
            <SwitchRoute callBackFunc={() => [routeState, setRouteState]}/>
            <Routes>
                <Route path='*' element={<ChnlBody />} /> 
                <Route path='search/:searchQuery' element={<ChannelSearch />}/>
            </Routes>    
        </div>
    );
};

function SwitchRoute ({src=['HOME', 'COMMUNITY'], isLoading, callBackFunc= () => [] }:ChnlProp<RouteType[]>) {

    const [currRoute, setRoute] = callBackFunc();

    return (
        <div className="w-full flex gap-4 my-1 overflow-x-scroll scrollbar-hide">
            {
                src?.map( (route, ind) => (
                    <p onClick={ () => setRoute(route) } key={ind} 
                        className={`text-md p-2 semibold cursor-default ${route === currRoute ? 'border-b-white border-b-[2px] scale-[1]' : '' }`}>
                        {route[0] + route.slice(1).toLowerCase()}
                    </p>) 
                )
            }
        </div>
    )
};

export default Channel
