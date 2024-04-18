/* -- BYIMAAN -> THE FUTURE -- */

import { createSlice } from "@reduxjs/toolkit";
import { ApiActions } from "./actions";

export interface TokensTs {
    tooManyReqs: string[],
    forbidden: string[],
    '4XX': string[],
    okay: string[]
};

export interface ApiSliceTs {
   tokens : TokensTs,
   token : string | null, 
};

const defaultToken = process.env.REACT_APP_UTUBE_API_KEY!;
const otherStoredToken = localStorage.getItem('token');
const validTokens = ( otherStoredToken === defaultToken || !otherStoredToken) ? [defaultToken] : [otherStoredToken, defaultToken]

const initialState: ApiSliceTs = {
    tokens: {
        tooManyReqs: [], 
        forbidden: [],
        '4XX': [], 
        okay: validTokens,
    },
    token: validTokens[0],
};

const ApiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: ApiActions
});

export default ApiSlice.reducer;
export const {append4xxUnvalidTokenAction, addNewToken} = ApiSlice.actions;