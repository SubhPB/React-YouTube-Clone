/* -- BYIMAAN -> THE FUTURE -- */
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiErrorState } from "./slice";

export const selectApiError = createSelector(
    (state: RootState) => state.apiError,
    (state: ApiErrorState) => state.state,
);