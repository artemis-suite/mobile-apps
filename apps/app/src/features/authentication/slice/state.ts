export const initialState = {
    token: null as {
        access_token: string,
        refresh_token: string,
    },
    loading: false,
    loaded: false,
    isLoggedIn: false,
    error: null as string,
    isInitilized: false
}

export type AuthState = typeof initialState;