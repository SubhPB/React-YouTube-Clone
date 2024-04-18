/* -- BYIMAAN -> THE FUTURE -- */

import { PayloadAction } from "@reduxjs/toolkit";
import { ApiSliceTs } from "./slice";

export interface TokenPayload {
    code: 429 | 403,
    token: string
};

function append4xxUnvalidTokenAction(state: ApiSliceTs, action: PayloadAction<TokenPayload>){
    const tokenTypeArray = action.payload.code === 429 ? state.tokens.tooManyReqs : state.tokens.forbidden;
    const alreadyExists = tokenTypeArray.includes(action.payload.token);


    if (!alreadyExists){
        console.log('ckeck in action ', action)
        tokenTypeArray.push(action.payload.token);
        state.tokens.okay = state.tokens.okay.filter( t => t !== action.payload.token);

        if (state.token === action.payload.token){
            // if all tokens are unvalid then assign null to the the curr_token else take the first token from okay[]  
            state.token = state.tokens.okay.length === 0 ? null : state.tokens.okay[0];
        };
    }
};

function addNewToken(state: ApiSliceTs, action: PayloadAction<string>){

    const newToken = action.payload;
    const unValidTokens = state.tokens.tooManyReqs.concat(state.tokens.forbidden);

    if (!unValidTokens.includes(newToken) && !state.tokens.okay.includes(newToken)){
        state.tokens.okay.push(newToken);
        if (!state.token) state.token = newToken;
    }

}

export const ApiActions = {append4xxUnvalidTokenAction, addNewToken}