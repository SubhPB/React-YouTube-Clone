/* -- BYIMAAN -> THE FUTURE -- */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiFetchTS } from "./apiTypes";

const initialApiState: apiFetchTS<any> = {
    data: null, error: null, isLoading: true
};

// const ApiSlice = createSlice({
//     name: 'api',
//     initialState: initialApiState,
//     reducers: {
//         fetchApiStart(state) {
//             state = {
//                 ...state,
//                 data: null,
//                 isLoading: true,
//                 error: null,
//             };
//         }, 
//         fetchDataSuccess<T>(state: apiFetchTS<any>, action: PayloadAction<T>){
//             state = {
//                 ...state,
//                 data: action.payload,
//                 isLoading: false,
//                 error: null
//             };
//         },
//         fetchDataError(state, action: PayloadAction<string>){
//             state = {
//                 ...state, 
//                 data: null,
//                 isLoading: false,
//                 error: action.payload
//             };
//         },
//     },
// });

export const createCustomSlice = (sliceName : string) => {
    const slice =  createSlice({
        name: sliceName,
        initialState: initialApiState,
        reducers: {
            fetchApiStart(state) {
                state = {
                    ...state,
                    data: null,
                    isLoading: true,
                    error: null,
                };
            }, 
            fetchDataSuccess<T>(state: apiFetchTS<any>, action: PayloadAction<T>){
                state = {
                    ...state,
                    data: action.payload,
                    isLoading: false,
                    error: null
                };
            },
            fetchDataError(state, action: PayloadAction<string>){
                state = {
                    ...state, 
                    data: null,
                    isLoading: false,
                    error: action.payload
                };
            },
        },
    });

    const sliceActions = slice.actions;

    const sliceReducer = slice.reducer;

    return [slice, sliceActions, sliceReducer]
};



// export const {fetchApiStart, fetchDataSuccess} = ApiSlice.actions;
// export default ApiSlice.reducer;