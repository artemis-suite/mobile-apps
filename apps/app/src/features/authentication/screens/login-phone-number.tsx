
import { Screen, Image, Text, Box, Button } from "@artemis-mobile/elements";

import { RootStackScreenProps } from "app/navigation/types"

type ScreenProps = RootStackScreenProps<"LoginPhoneNumber">;

export default function LoginPhoneNumbergScreen({ navigation }: ScreenProps) {
    return <Screen>
        <Text variant="h1">Hello, Its me</Text>
    </Screen>
}