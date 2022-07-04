import { SafeAreaView } from "react-native";
import { Text, Box, Theme, RTLTheme as theme } from "@artemis-mobile/elements";

import { storiesOf } from '@storybook/react-native';

import { languageContext } from "../contexts";

const sampleText: Record<string, string> = {
    "RTL": "الثعلب البني السريع يقفز",
    "LTR": "The Quick brown fox jumps"
}

const storyAPI = storiesOf("Typegraphy", module)
    .addDecorator((story, ctx) =>
        <SafeAreaView>
            <Box padding="l"
                margin="l"
            >
                <Text variant="h4" marginVertical="l">Typography {ctx.name}</Text>
                {story()}
            </Box>
        </SafeAreaView>
    )

Object.keys(theme.textVariants).map((font) => {
    storyAPI.add(font, () => {
        return (
            <languageContext.Consumer>
                {(lang) => {
                    return (
                        <Box padding="l"
                            borderColor="dark"
                            borderRadius="m"
                            borderStyle="solid"
                            backgroundColor="gray/100">
                            <Box backgroundColor="gray/300">
                                <Text variant={font as any} color="dark" textAlign="center">
                                    {sampleText[lang]}
                                </Text>
                            </Box>
                            <Box paddingVertical="m">
                                <Text variant="p1" color="gray/500">Font Size : {theme.textVariants[font as keyof Theme["textVariants"]].fontSize}</Text>
                                <Text variant="p1" color="gray/500">Font weight : {theme.textVariants[font as keyof Theme["textVariants"]].fontFamily}</Text>
                            </Box>
                        </Box>)
                }}
            </languageContext.Consumer>)
    })
});