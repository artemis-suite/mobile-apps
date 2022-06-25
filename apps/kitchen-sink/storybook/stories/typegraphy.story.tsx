import React from "react";
import { SafeAreaView } from "react-native";
import { Text, Box, ThemeProvider, theme, Theme } from "@artemis-mobile/elements";

import { storiesOf } from '@storybook/react-native';

const storyAPI = storiesOf("Typegraphy", module)
    .addDecorator(story =>
        <ThemeProvider theme={theme}>
            <SafeAreaView>
                <Box padding="l">
                    {story()}
                </Box>
            </SafeAreaView>
        </ThemeProvider>
    );

Object.keys(theme.textVariants).map((font) => {
    storyAPI.add(font, () => <Box width="90%">
        <Text variant={font as any} color="dark">{font} - The Quick brown fox jumps</Text>
        <Box>
            <Text variant="p1" color="gray/500">Font Size : {theme.textVariants[font as keyof Theme["textVariants"]].fontSize}</Text>
            <Text variant="p1" color="gray/500">Font weight : {theme.textVariants[font as keyof Theme["textVariants"]].fontFamily}</Text>
        </Box>
    </Box>

    )
});