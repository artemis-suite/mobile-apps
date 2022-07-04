
import { Screen, Image, Text, Box, Button, Input } from "@artemis-mobile/elements";

import { RootStackScreenProps } from "app/navigation/types"

type ScreenProps = RootStackScreenProps<"LoginPhoneNumber">;

export default function LoginPhoneNumbergScreen({ navigation }: ScreenProps) {
    return <Screen height="100%">
        <Box padding="xl">
            <Text variant="p2" textAlign="right">
                ادخل رقم موبايلك و سوف نقوم بارسال code من ٤ ارقام
            </Text>
        </Box>
        <Box paddingHorizontal="l">
            <Input.Text direction="RTL" label="موبايل" icon="fa-mobile-alt" placeholder="+46 72 000 00 00" />
        </Box>
        <Box padding="xl" alignItems="center">
            <Button label="ارسل الكود" size="large" />
        </Box>
        <Image.Static source="background-login" width="100%" position="absolute" bottom={0} />
    </Screen>
}