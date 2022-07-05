import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"

import authReducer from "../features/authentication/slice";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export const ReduxStoreProvider = ({ children }) => {
    return <Provider store={store}>
        {children}
    </Provider>
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
