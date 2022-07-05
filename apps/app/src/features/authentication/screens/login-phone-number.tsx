import { useCallback, useState } from "react";

import { Screen, Image, Text, Box, Button, Input } from "@artemis-mobile/elements";

import { RootStackScreenProps } from "app/navigation/types"
import { useAuthAction } from "auth/slice";

type ScreenProps = RootStackScreenProps<"LoginPhoneNumber">;

export default function LoginPhoneNumbergScreen({ navigation }: ScreenProps) {

    const [phoneNumber, setPhoneNumber] = useState("");
    const sendVerificationCode = useAuthAction("sendVerificationCode");
    const onSendPressed = useCallback(async () => {
        await sendVerificationCode([phoneNumber]);
        navigation.navigate("LoginVerification");
    }, [phoneNumber]);

    return <Screen height="100%">
        <Box padding="xl">
            <Text variant="p2" textAlign="right">
                ادخل رقم موبايلك و سوف نقوم بارسال code من ٤ ارقام
            </Text>
        </Box>
        <Box paddingHorizontal="l">
            <Input.Phone direction="RTL" label="موبايل" icon="fa-mobile-alt" placeholder="+46 72 000 00 00" value={phoneNumber} onChange={setPhoneNumber} />
        </Box>
        <Box padding="xl" alignItems="center">
            <Button label="ارسل الكود" size="large" onPress={onSendPressed} />
        </Box>
        <Image.Static source="background-login" width="100%" position="absolute" bottom={0} />
    </Screen>
}