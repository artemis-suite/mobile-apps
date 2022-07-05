/*
in this file we need to export 
    1- hook that accepts the selector names 
    2- hook that accepts action | thunk name and dispatch it
    3- combine reducers to be used in creating the store (export as default cuz it is not used anywhere else)
    4- state type to be used in components / global selectors
*/

import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch
} from 'react-redux';

import * as localSelectors from "./selectors";
import * as thunk from "./thunk";
import { reducer, actions } from "./slice";

type dispatchActions = keyof typeof actions;
type dispatchThunk = keyof typeof thunk;
type Dispatchables = dispatchActions | dispatchThunk;

// State 
export type { AuthState } from "./state";

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
    TKey extends Dispatchables,
    TParams = TKey extends dispatchThunk
    ? Parameters<typeof thunk[TKey]>
    : TKey extends dispatchActions ? Parameters<typeof actions[TKey]> : never,
    TReturn = TKey extends dispatchThunk
    ? ReturnType<ReturnType<typeof thunk[TKey]>>
    : TKey extends dispatchActions ? ReturnType<ReturnType<typeof actions[TKey]>> : never
>(key: TKey): (args?: TParams) => TReturn {
    const dispatch = useReduxDispatch();
    return (args?: TParams) => {
        const action = (actions[key] || thunk[key]) as Function
        return dispatch(
            action.apply(this, (args ?? []))
        )
    }
}
// reducer
export default reducer;