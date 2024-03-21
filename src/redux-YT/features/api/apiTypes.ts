/* -- BYIMAAN -> THE FUTURE -- */

export interface apiFetchTS<T> {
    data: T | null,
    error: string | null,
    isLoading: boolean
};