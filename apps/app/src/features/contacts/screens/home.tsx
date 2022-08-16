import { useCallback, useState } from "react";

import { Screen, Box, Text, VerificationCode, Image, Button } from "@artemis-mobile/elements";

import { RootStackScreenProps } from "app/navigation/types";
import { useLocal } from "app/i18n";
type ScreenProps = RootStackScreenProps<"Main">;

export default function HomeScreen() {

    const { language } = useLocal();

    return <Screen height="100%">
        <Box padding="l">
            <Text>Language : {language}</Text>
        </Box>
    </Screen>
}

