import { store } from "../../app/store";

export type ThunkAction<T = any> = (
    dispatch: typeof store.dispatch,
    getState: typeof store.getState)
    => Promise<T> | T