/* -- BYIMAAN -> THE FUTURE -- */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiFetchTS } from "./apiTypes";

const intitalApiState: apiFetchTS<string> = {
    data: null, error: null, isLoading: true
};

//  will continue to work on slice. soon ....