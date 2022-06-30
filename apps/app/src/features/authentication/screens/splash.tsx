
import { useEffect } from "react";

import { Screen, Image, Text, Box, ActivityIndicator } from "@artemis-mobile/elements";

import { RootStackScreenProps } from "../../../app/navigation/types"
import { useAuthAction } from "../slice";

type ScreenProps = RootStackScreenProps<"Splash">;

export default function SplashScreen() {
    const initialized = useAuthAction("initialized");
    useEffect(() => {
        setTimeout(() => {
            initialized();
        }, 5000);
    }, []);

    return <Screen alignItems="center">
        <Box height={60} />
        <Image.Static source="background-landing" width="100%" />
        <Box height={50} />
        <Text variant="h1">القي الشبكة</Text>
        <Box height={70} />
        <ActivityIndicator size={80} />
    </Screen>
}