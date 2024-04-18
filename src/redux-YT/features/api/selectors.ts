/* -- BYIMAAN -> THE FUTURE -- */

import { RootState } from "../../app/store";
import { ApiSliceTs } from "./slice";
import { createSelector } from "@reduxjs/toolkit";

const selectApi = (state: RootState) => state.api;

export const selectToken = createSelector( selectApi, (state: ApiSliceTs) => state.token  );

export const selectForbiddenTokens = createSelector(selectApi, state => state.tokens.forbidden);

export const selectRateLimitedTokens = createSelector(selectApi, state => state.tokens.tooManyReqs);

export const selectUnvalidTokens = createSelector(selectApi, state => state.tokens.forbidden.concat(state.tokens.tooManyReqs))
/* more selector like selectForbiddden, select429 */

