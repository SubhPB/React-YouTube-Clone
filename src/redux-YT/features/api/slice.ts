/* -- BYIMAAN -> THE FUTURE -- */

import { createSlice } from "@reduxjs/toolkit";
import { ApiActions } from "./actions";

export interface TokensTs {
    tooManyReqs: string[],
    forbidden: string[],
    okay: string[]
};

export interface ApiSliceTs {
   tokens : TokensTs,
   token : string | null, 
};

const defaultTokens = ['994159bf3cmshcb58d8c5a6c227ap18e210jsn4ea1fc9264b4', process.env.REACT_APP_UTUBE_API_KEY! ];
const otherStoredToken = localStorage.getItem('token');
const validTokens = ( defaultTokens.includes(otherStoredToken ?? 'unvalid') || !otherStoredToken) ? defaultTokens : [otherStoredToken, ...defaultTokens]

const initialState: ApiSliceTs = {
    tokens: {
        tooManyReqs: [], 
        forbidden: [],
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