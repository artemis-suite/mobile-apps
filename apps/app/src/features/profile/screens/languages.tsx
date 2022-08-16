import Flag from 'react-native-flags-typescript';

import { Screen, Box, Text, Card, Item, IconProps } from "@artemis-mobile/elements";

import { useLocal, changeLanguage } from "app/i18n";


const LanguageItem = (
    { languageLabel, languageCode, flagCode, color, icon, onPress, last = false }:
        {
            languageLabel: string,
            languageCode: "sv" | "en" | "ar",
            flagCode: "SE" | "GB" | "EG",
            color: IconProps["color"],
            icon: IconProps["name"],
            last?: boolean,
            onPress: (lang: string) => void
        }) => {
    return (
        <Item bottomDivider={!last} justifyContent="space-between" onPress={() => onPress(languageCode)}>
            <Box flexDirection="row">
                <Flag type="flat" code={flagCode} size={24} />
                <Text paddingStart="s">{languageLabel}</Text>
            </Box>
            <Item.Icon name={icon} color={color} />
        </Item>
    )
}
export default function LanguagesScreen() {
    const { language } = useLocal();

    return (
        <Screen>
            <Card margin="s">
                <LanguageItem
                    onPress={changeLanguage}
                    languageLabel="Siverge"
                    languageCode="sv"
                    flagCode="SE"
                    color={language === "sv" ? "primary/500" : "primary/200"}
                    icon={language === "sv" ? "fa-circle-check" : "fa-circle"}
                />
                <LanguageItem
                    onPress={changeLanguage}
                    languageLabel="English"
                    languageCode="en"
                    flagCode="GB"
                    color={language === "en" ? "primary/500" : "primary/200"}
                    icon={language === "en" ? "fa-circle-check" : "fa-circle"}
                />
                <LanguageItem
                    onPress={changeLanguage}
                    last
                    languageLabel="العربية"
                    languageCode="ar"
                    flagCode="EG"
                    color={language === "ar" ? "primary/500" : "primary/200"}
                    icon={language === "ar" ? "fa-circle-check" : "fa-circle"}
                />
            </Card>
        </Screen>
    );
}