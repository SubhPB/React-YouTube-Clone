/* -- BYIMAAN -> THE FUTURE -- */


import { HomeSlice } from './homeSlice';

interface actionProp {
    url ?: string; 
    query ?: string;
}

export const fetchHomeDataAction = ({url = 'david goggins', query=undefined }: actionProp) => (
    query ? HomeSlice.fetchSliceData( `search/?q=${query}`) : HomeSlice.fetchSliceData( `search/?q=${url}` )
);