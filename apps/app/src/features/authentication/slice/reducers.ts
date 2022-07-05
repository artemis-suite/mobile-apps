import type { PayloadAction } from "@reduxjs/toolkit";
import type { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { AuthState, initialState } from "./state";

export const reducers = {
    "initialized": (state: AuthState) => {
        state.isInitilized = true;
    },
    "login/start": (state: AuthState, action: PayloadAction<string>) => {
        state.phoneNumber = action.payload;
    },
    "login/fulfill": (state: AuthState) => {
        state.isAuthenticated = true;
        state.phoneNumber = null;

    },
    "login/failed": (state: AuthState, action: PayloadAction<string>) => {
        state.isAuthenticated = false;
        state.error = action.payload
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