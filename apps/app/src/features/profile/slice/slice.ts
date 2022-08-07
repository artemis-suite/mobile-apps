import { createSlice } from "@reduxjs/toolkit";
import { extraReducers, reducers } from "./reducers";
import { initialState } from "./state";

const slice = createSlice({
    name: "profile",
    initialState,
    reducers,
    extraReducers
});


export const { reducer, actions } = slice;
