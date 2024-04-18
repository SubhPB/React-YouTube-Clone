/* -- BYIMAAN -> THE FUTURE -- */

import { createSlice, PayloadAction, Slice, CaseReducerActions, SliceCaseReducers, Reducer } from "@reduxjs/toolkit";
import { AppThunk } from "../app/store";
import { fetchData } from "../../src-utils/api";
import {AxiosError} from "axios";
import { append4xxUnvalidTokenAction } from "../features/api/slice";


interface State<T> {
    data: T | null;
    error: string | null;
    isLoading: boolean;
}

const initialApiState: State<null> = {
    data: null, error: null, isLoading: true
};


const createCustomSlice = <T>(sliceName: string): Slice<State<T | null>> => {
    const slice: Slice =  createSlice({
        name: sliceName,
        initialState: initialApiState,
        reducers: {
            fetchApiStart(state: State<T | null>, action?: PayloadAction<T> ){
                state.data = null;
                state.error = null;
                state.isLoading = true
            }, 
            fetchDataSuccess(state: State<T | null>, action: PayloadAction<T>){
                state.data = action.payload;
                state.error = null;
                state.isLoading = false
            },
            fetchDataError(state, action: PayloadAction<string>){
                state.data = null;
                state.error = action.payload;
                state.isLoading = false
            },
        },
    });

    return slice;
};


export default class CustomSlice<T>{
    
    sliceName: string;
    slice: Slice<State<T | null>>;
    sliceActions: CaseReducerActions< SliceCaseReducers <State<null | T>>, string >
    sliceReducer: Reducer<State<T | null>>;

    constructor(sliceName: string){
        this.sliceName = sliceName;
        this.slice = createCustomSlice<T>( this.sliceName );
        this.sliceActions = this.slice.actions;
        this.sliceReducer = this.slice.reducer;
    };

    fetchSliceData(url: string): AppThunk {

        const {fetchApiStart, fetchDataSuccess, fetchDataError} = this.sliceActions;

        return async function thunkCallback( dispatch, getState){
            dispatch( fetchApiStart('') );

            fetchData(url).then(
                (response: T) => {
                    console.log('Data has been successfully fetched in thunk', response)
                    dispatch( fetchDataSuccess( response ) );
                } 
            ).catch (
                (err: AxiosError) => {

                    const response = err?.response;
                    const [statusCode, unValidKey] = [response?.status, response?.config?.headers?.['X-RapidAPI-Key']];
                    console.log('Check error', err);
                    dispatch( fetchDataError(err?.message ?? 'error-occured') );

                    if ( (statusCode === 429 || statusCode === 403) && unValidKey ){
                        console.log("append4xxUnvalidTokenAction has been dispatched");
                        dispatch(append4xxUnvalidTokenAction({
                            code: statusCode,
                            token: unValidKey,
                        }))
                    };
                }
            ).finally (
                () => {console.log('thunk has completed its task to fetch data!')}
            )
        }

    };
};

