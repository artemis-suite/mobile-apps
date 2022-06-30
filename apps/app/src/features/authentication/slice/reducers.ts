import type { PayloadAction } from "@reduxjs/toolkit";

import { AuthState, initialState } from "./state";

export const reducers = {
    "initialized": (state: AuthState) => {
        state.isInitilized = true;
    },
    "login/start": (state: AuthState) => {
        state.loaded = false;
        state.loading = true;
        state.isLoggedIn = false;
        state.token = null;
        state.error = null;
    },
    "login/fulfill": (state: AuthState, action: PayloadAction<{ access_token: string, refresh_token: string }>) => {
        state.loaded = true;
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload;
        state.error = null;

    },
    "login/failed": (state: AuthState, action: PayloadAction<string>) => {
        state.loaded = true;
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.payload;
        state.token = null;
    },
    "logout": (state: AuthState) => {
        return {
            ...initialState,
            isInitilized: state.isInitilized
        }
    }
}

export const extraReducers = {

}