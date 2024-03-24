/* -- BYIMAAN -> THE FUTURE -- */


import { HomeSlice } from './homeActions';

interface actionProp {
    url ?: string; 
    query ?: string;
}

export const fetchHomeDataAction = ({url = 'home/', query=undefined }: actionProp) => (
    query ? HomeSlice.fetchSliceData( `search/?q=${query}`) : HomeSlice.fetchSliceData( url )
);