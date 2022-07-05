import { createSlice } from "@reduxjs/toolkit";
import { extraReducers, reducers } from "./reducers";
import { initialState } from "./state";

const slice = createSlice({
    name: "auth",
    initialState,
    reducers,
    extraReducers
});


export const { reducer, actions } = slice;
