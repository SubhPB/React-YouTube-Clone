/* -- BYIMAAN -> THE FUTURE -- */
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiErrorTs } from "./slice";

export const selectApiError = createSelector(
    (state: RootState) => state.apiError,
    (state: ApiErrorTs | null) => state,
);