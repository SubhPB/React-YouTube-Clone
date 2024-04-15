/* -- BYIMAAN -> THE FUTURE -- */
import { create } from "domain";
import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { ApiErrorTs } from "./slice";

interface TokenTs {
    key : string
}

// export const raiseApiErrorAction = createAction<ApiErrorTs>('raise-api-error');

function raiseApiErrorAction( state: ApiErrorTs | null , action: PayloadAction<ApiErrorTs> ){

    // if the error already occured then there is no need to update it...
    const noError = state === null;
    if (noError) state = action.payload;
};

function removeApiErrorAction(state: ApiErrorTs | null , action: PayloadAction){
    if (state) state = null;
};

function addExpireTokenAction(state: ApiErrorTs | null, action: PayloadAction<TokenTs>){
    const token = action.payload.key;
    if (state){
        !state.expiredKeys.includes(token) && state.expiredKeys.push(token)
    };
};

export const apiErrorActions = { removeApiErrorAction, addExpireTokenAction, raiseApiErrorAction };
