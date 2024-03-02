/* -- BYIMAAN -> THE FUTURE -- */

import React, {ReactNode, createContext, useContext} from 'react';
import FlexContainer from '../youtube/assists-jsx/FlexContainer';
import { Video } from '../youtube/assists-jsx/apiInterfaces';
import { obj } from '../src-utils/dataTypes';
import { vidCardTS } from '../src-utils/dataTypes';

interface contextTS {
    source ?: Video | null ,
    isLoading ?: boolean
}

const CardsContext = createContext<contextTS>({source: null, isLoading: true});

const VideoCardManager: React.FC<vidCardTS> = ({children, className='', xtraCss='', source=null, isLoading=true}) => {

    const utils: contextTS = {
        source : source, isLoading : isLoading
    };

    return ( 
        <CardsContext.Provider value={utils}>
            <div className={`video-card ${className} ${xtraCss}`}>
                {children}
            </div>
        </CardsContext.Provider>
    );
};

export const useVideoCard = () => useContext(CardsContext);