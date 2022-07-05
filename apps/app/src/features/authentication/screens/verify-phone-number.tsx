import { useCallback, useState } from "react";

import { Screen, Box, Text, VerificationCode, Image, Button } from "@artemis-mobile/elements";

import { RootStackScreenProps } from "app/navigation/types";
import { useAuthSelector, useAuthAction } from "auth/slice";

type ScreenProps = RootStackScreenProps<"LoginPhoneNumber">;

export default function VerifyPhoneNumberScreen({ navigation }: ScreenProps) {

    const phoneNumber = useAuthSelector("selectPhoneNumber");
    const verifyCode = useAuthAction("verifyCode");

    const onLoginPressed = useCallback(async (verificationCode: string) => {
        await verifyCode([verificationCode]);
        navigation.navigate("Main");
    }, [])
    return <Screen height="100%">
        <Box padding="xl" flexDirection="row-reverse">
            <Text variant="p2" textAlign="right">  ادخل الكود الذي تم ارساله الي</Text>
            <Text>{'  '}</Text>
            <Text variant="p1b" textAlign="right">{phoneNumber}</Text>
        </Box>
        <Box paddingHorizontal="l">
            <VerificationCode onSubmit={onLoginPressed} />
        </Box>
        <Image.Static source="background-login" width="100%" position="absolute" bottom={0} />
    </Screen>
}