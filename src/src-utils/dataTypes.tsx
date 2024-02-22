/* -- BYIMAAN -> THE FUTURE -- */

export interface obj<T>{
    [key: string]: T,
};

export type Func<Params extends any[], R=void> = (...args: Params) => R;
export type AsyncFunc<Params extends any[]> = (...args: Params) => Promise<any>;



