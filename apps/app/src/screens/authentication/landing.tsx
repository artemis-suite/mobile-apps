
import { Screen, Image, Text, Box, Button } from "@artemis-mobile/elements";

import { RootStackScreenProps } from "../../navigation/types"

type ScreenProps = RootStackScreenProps<"Landing">;

export default function LandingScreen({ }: ScreenProps) {
    return <Screen alignItems="center">
        <Box height={60} />
        <Image.Static source="background-landing" width="100%" />
        <Box height={50} />
        <Text variant="h1">القي الشبكة</Text>
        <Box height={70} />
        <Button variant="primary" size="large" label="ابدا" />
    </Screen>
}