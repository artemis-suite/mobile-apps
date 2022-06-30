import { AuthState } from "./state";

export const selectIsLoggedIn = (state: AuthState) => state.isLoggedIn

export const selectIsInitialized = (state: AuthState) => state.isInitilized;
