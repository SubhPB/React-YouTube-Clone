/* -- BYIMAAN -> THE FUTURE -- */

import {ReactNode} from "react";

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

export type Func<Params extends any[], R=void> = (...args: Params) => R;
export type AsyncFunc<Params extends any[]> = (...args: Params) => Promise<any>;



