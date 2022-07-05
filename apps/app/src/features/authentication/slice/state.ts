import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export const initialState = {
    phoneNumber: null as string,
    error: null as string,
    profile: null as FirebaseAuthTypes.ConfirmationResult,
    isAuthenticated: false,
    isInitilized: false
}

export type AuthState = typeof initialState;