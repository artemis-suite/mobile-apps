import { useState } from "react";
import { Screen, Box, Button, Avatar, Text, Input } from "@artemis-mobile/elements";

import { selectCurrentProfile } from "app/selectors";
import { useAppSelector } from "app/store";
import { translateScope } from "app/i18n";
import { ProfileStackScreenProps } from "app/navigation/types";
import { useProfileAction } from "profile/slice";


type ScreenProps = ProfileStackScreenProps<"Settings">;

const $t = translateScope("profile")("me");

export default function MeScreen({ navigation }: ScreenProps) {
    const user = useAppSelector(selectCurrentProfile);
    const updateProfileAction = useProfileAction("updateProfile");
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [displayName, setDisplayName] = useState(user.displayName);
    return (
        <Screen>
            <Box alignItems="center">
                <Avatar source={user.photoURL} size="l" />
            </Box>
            <Box marginHorizontal="l" padding="m">
                <Input.Text label={$t("photoURLLabel")} value={photoURL} onChange={setPhotoURL} />
                <Input.Text label={$t("displayNameLabel")} value={displayName} onChange={setDisplayName} />
                <Input.Text label={$t("roleLabel")} value={user.role} disabled />
            </Box>
            <Box alignItems="center">
                <Button variant="primary" label={$t("saveButton")} size="large" onPress={async () => {
                    await updateProfileAction([{
                        photoURL,
                        displayName
                    }]);
                    navigation.goBack();
                }} />
            </Box>
        </Screen>
    )
}