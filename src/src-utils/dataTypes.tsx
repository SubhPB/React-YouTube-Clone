/* -- BYIMAAN -> THE FUTURE -- */

import {ReactNode} from "react";
import { Video } from "../youtube/assists-jsx/apiInterfaces";

export interface obj<T>{
    [key: string]: T,
};

export interface VideoCardElem<T> {
    className ?: string;
    xtraCss ?: string;
    source ?: T | undefined;
    children ?: ReactNode;
    loading ?: boolean;
};

export interface vidCardTS {
    className ?: string,
    xtraCss ?: string,
    children ?: ReactNode,
    source ?: Video | null ,
    isLoading ?: boolean,
    isSmall ?: boolean
};

export type Func<Params extends any[], R=void> = (...args: Params) => R;
export type AsyncFunc<Params extends any[]> = (...args: Params) => Promise<any>;



