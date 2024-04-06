/* -- BYIMAAN -> THE FUTURE -- */

import { createSlice } from "@reduxjs/toolkit";
import { allSubcriptionActions } from "./actions";

export enum ChnlStatus {
    SUBCRIBE='SUBCRIBE',
    UNSUBCRIBE='UNSUBCRIBE'
};

export interface ChnlState {
    [status: string] : ChnlStatus
}

const initailState: ChnlState = {};

const SubcriptionSlice = createSlice({
    name: 'subcription',
    initialState: initailState,
    reducers: allSubcriptionActions
});


export const SubcribeReducer = SubcriptionSlice.reducer;
export const { subcribreChnl, unSubcribeChnl } = SubcriptionSlice.actions; 
