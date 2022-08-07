import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState, initialState, MyProfile } from "./state";

export const reducers = {
    "initialized": (state: AuthState) => {
        state.isInitilized = true;
    },
    "login/start": (state: AuthState, action: PayloadAction<string>) => {
        state.phoneNumber = action.payload;
    },
    "login/fulfill": (state: AuthState, action: PayloadAction<MyProfile>) => {
        state.isAuthenticated = true;
        state.phoneNumber = null;
        state.profile = {
            displayName: action.payload.displayName,
            phoneNumber: action.payload.phoneNumber,
            photoURL: action.payload.photoURL,
            role: action.payload.role,
            lastLoginDate: action.payload.lastLoginDate
        }

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