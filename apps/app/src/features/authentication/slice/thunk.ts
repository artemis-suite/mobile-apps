import auth from "@react-native-firebase/auth";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

import type { ThunkAction } from "common/utils/thunk-action";
import { actions } from "./slice";

// this is used to store the confirmation result from firebase 
// this cannot be serialized this cannot be added to the store 
// Try to store it as local variable since it will not be used 
// threw multiple lunches of the app.
let confirmationResult: FirebaseAuthTypes.ConfirmationResult = null;

export const listenToLoginChange = (): ThunkAction => {
    return async (dispatch) => {
        auth().onAuthStateChanged(user => {
            if (user) { // login
                dispatch(actions["login/fulfill"]());
            }
            else {  // logout
                dispatch(actions.logout());
            }
        })
    }
}

export const sendVerificationCode = (phoneNumber: string): ThunkAction => {
    return async (dispatch) => {
        confirmationResult = await auth().signInWithPhoneNumber(phoneNumber, true);
        dispatch(actions["login/start"](phoneNumber));
    }
}

export const verifyCode = (code: string): ThunkAction => {
    return async (dispatch) => {
        try {
            await confirmationResult.confirm(code);
        }
        catch (err) {
            dispatch(actions["login/failed"](err));
        }
    }
}