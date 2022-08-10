import { configureStore } from "@reduxjs/toolkit";
import { Provider, TypedUseSelectorHook, useSelector } from "react-redux"

import authReducer from "../features/authentication/slice";
import profileReducer from "../features/profile/slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer
    }
})

export const ReduxStoreProvider = ({ children }) => {
    return <Provider store={store}>
        {children}
    </Provider>
}

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector