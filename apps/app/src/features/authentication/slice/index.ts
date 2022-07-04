import { createSlice } from "@reduxjs/toolkit";
import { useSelector as useReduxSelector, useDispatch as useReduxDispatch } from 'react-redux';

import { initialState } from "./state";
import * as localSelectors from "./selectors";
import { reducers, extraReducers } from "./reducers";

const slice = createSlice({
    name: "auth",
    initialState,
    reducers,
    extraReducers
});

// State 
export { AuthState } from "./state";

// reducer
export const authReducer = slice.reducer;

// selectors
export function useAuthSelector<
    TKey extends keyof typeof localSelectors,
    TFuncParams extends Parameters<typeof localSelectors[TKey]>,
    TParams extends TFuncParams['length'] extends 0 ? undefined :
    (((...b: TFuncParams) => void) extends (a, ...b: infer I) => void ? I : [])
>(key: TKey, args?: TParams): ReturnType<typeof localSelectors[TKey]> {
    const selector = localSelectors[key];
    return useReduxSelector<any>(
        state => selector.apply(this, [state.auth, ...(args ?? [])])
    ) as ReturnType<typeof localSelectors[TKey]>;
}

// actions
export function useAuthAction<
    TKey extends keyof typeof slice.actions,
    TParams extends Parameters<typeof slice.actions[TKey]>
>(key: TKey): (args?: TParams) => ReturnType<typeof slice.actions[TKey]> {
    const dispatch = useReduxDispatch();
    return (args?: TParams) => {
        const action = slice.actions[key] as Function
        return dispatch(action.apply(this, ...(args ?? [])))
    }
}