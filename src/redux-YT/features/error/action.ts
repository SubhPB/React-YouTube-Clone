/* -- BYIMAAN -> THE FUTURE -- */
import { create } from "domain";
import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { ApiErrorTs, ApiErrorState } from "./slice";

interface TokenTs {
    key : string
}

// export const raiseApiErrorAction = createAction<ApiErrorTs>('raise-api-error');

function raiseApiErrorAction( state: ApiErrorState , action: PayloadAction<ApiErrorTs> ){

    // if the error already occured then there is no need to update it...
    const noError = state.state === null;
    if (noError) state.state = action.payload;
};

function removeApiErrorAction(state: ApiErrorState , action: PayloadAction){
    if (state.state) state.state = null;
};

function addExpireTokenAction(state: ApiErrorState, action: PayloadAction<TokenTs>){
    const token = action.payload.key;
    if (state.state){
        !state.state.expiredKeys.includes(token) && state.state.expiredKeys.push(token)
    };
};

export const apiErrorActions = { removeApiErrorAction, addExpireTokenAction, raiseApiErrorAction };
