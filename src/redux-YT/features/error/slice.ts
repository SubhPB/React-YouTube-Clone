/* -- BYIMAAN -> THE FUTURE -- */

import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { apiErrorActions } from "./action";

export interface ApiErrorTs {
    statusCode : number,
    expiredKeys: string[]
    error ?: string,
};

const initialState : (ApiErrorTs | null) = null;

export const ApiErrorSlice = createSlice({
    name: 'api-error',
    initialState,
    reducers: apiErrorActions,
});

export default ApiErrorSlice.reducer;
export const { removeApiErrorAction, addExpireTokenAction } = ApiErrorSlice.actions;