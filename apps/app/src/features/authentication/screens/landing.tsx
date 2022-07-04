
import { Screen, Image, Text, Box, Button } from "@artemis-mobile/elements";

import { RootStackScreenProps } from "~app/navigation/types"

type ScreenProps = RootStackScreenProps<"Landing">;

export default function LandingScreen({ navigation }: ScreenProps) {
    return <Screen alignItems="center">
        <Box height={60} />
        <Image.Static source="background-landing" width="100%" />
        <Box height={50} />
        <Text variant="h1">القي الشبكة</Text>
        <Box height={70} />
        <Button variant="primary" size="large" label="ابدأ" onPress={() => navigation.navigate("LoginPhoneNumber")} />
    </Screen>
}