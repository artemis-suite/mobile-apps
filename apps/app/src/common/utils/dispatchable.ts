import { AppDispatch, RootState, store } from "../../app/store";
import { logger } from "./logger";

export type ThunkAction<T = any> = (
    dispatch: AppDispatch,
    getState: () => RootState)
    => Promise<T> | T

export function dispatchable<TProviderFunction extends (...args: any[]) => ThunkAction<any>>
    (func: TProviderFunction): (...funcArgs: Parameters<TProviderFunction>) => ReturnType<ReturnType<TProviderFunction>> {
    return (...args: Parameters<TProviderFunction>) => {
        try {
            return store.dispatch(func(...args))
        }
        catch (err) {
            logger.error(err);
            throw err;
        }
    }
}