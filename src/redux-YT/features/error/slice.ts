/* -- BYIMAAN -> THE FUTURE -- */

import {  createSlice } from "@reduxjs/toolkit";
import { apiErrorActions } from "./action";

export interface ApiErrorTs {
    statusCode : number,
    expiredKeys: string[]
    error ?: string,
};

export interface ApiErrorState {
    state: ApiErrorTs | null;
}

const initialState : ApiErrorState = {
    state: null
};

export const ApiErrorSlice = createSlice({
    name: 'api-error',
    initialState,
    reducers: apiErrorActions,
});

export default ApiErrorSlice.reducer;
export const { removeApiErrorAction, addExpireTokenAction, raiseApiErrorAction } = ApiErrorSlice.actions;