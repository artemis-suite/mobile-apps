export type MyProfile = {
    displayName: string,
    photoURL: string,
    role: string,
    phoneNumber: string,
    lastLoginDate: string
}

export const initialState = {
    phoneNumber: null as string,
    error: null as string,
    profile: null as MyProfile,
    isAuthenticated: false,
    isInitilized: false
}

export type AuthState = typeof initialState;