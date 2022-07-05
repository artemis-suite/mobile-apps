import { AuthState } from "./state";

export const selectIsAuthenticated = (state: AuthState) => state.isAuthenticated

export const selectIsInitialized = (state: AuthState) => state.isInitilized;

export const selectPhoneNumber = (state: AuthState) => state.phoneNumber;
