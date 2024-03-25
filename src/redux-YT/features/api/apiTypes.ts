/* -- BYIMAAN -> THE FUTURE -- */
import { Action } from "redux"

export interface apiFetchTS<T> {
    data: T | null,
    error: string | null,
    isLoading: boolean
};

export enum ApiStateTypes {
    FETCH_DATA_START = 'FETCH_DATA_START',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
};

interface FetchDataStartAction extends Action {
    type: ApiStateTypes.FETCH_DATA_START;
};

interface FetchDataSuccessAction<T> extends Action{
    type: ApiStateTypes.FETCH_DATA_SUCCESS;
    payload: T
};

interface FetchDataErrorAction extends Action {
    type: ApiStateTypes.FETCH_DATA_ERROR
};

export type ApiActions<T> = FetchDataStartAction | FetchDataErrorAction | FetchDataSuccessAction<T>;
