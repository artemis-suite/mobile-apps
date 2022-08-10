import { useState } from "react";
import { Screen, Box, Button, Avatar, Text, Input } from "@artemis-mobile/elements";

import { selectCurrentProfile } from "app/selectors";
import { useAppSelector } from "app/store";
import { ProfileStackScreenProps } from "app/navigation/types";
import { useProfileAction } from "profile/slice";


type ScreenProps = ProfileStackScreenProps<"Settings">;

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
                <Input.Text label="Photo Url" value={photoURL} onChange={setPhotoURL} />
                <Input.Text label="Display Name" value={displayName} onChange={setDisplayName} />
                <Input.Text label="Role" value={user.role} disabled />
            </Box>
            <Box alignItems="center">
                <Button variant="primary" label="Save" size="large" onPress={async () => {
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