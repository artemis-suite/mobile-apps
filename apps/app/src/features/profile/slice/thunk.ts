import auth from "@react-native-firebase/auth";

import type { ThunkAction } from "common/utils/thunk-action";

const firebaseAuth = auth();

export const logout = (): ThunkAction => {
    return async () => {
        await firebaseAuth.signOut();
    }
}

export const updateProfile =
    (profile: { photoURL?: string, displayName?: string }): ThunkAction => {
        return async () => {
            await firebaseAuth.currentUser.updateProfile(profile);
        }
    }