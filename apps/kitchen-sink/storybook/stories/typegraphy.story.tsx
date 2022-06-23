import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Text, Box, ThemeProvider, theme, ThemeType } from "@artemis-mobile/elements";

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

// storyAPI.add("Typegraphy", () => {
//     return <Box padding="l">
//         {Object.keys(theme.textVariants).map((font) => {
//             return <Box paddingBottom="m">
//                 <Text variant={font as any} color="dark">{font} - The Quick brown fox jumps</Text>
//                 <Box>
//                     <Text variant="p1" color="gray/500">Font Size : {theme.textVariants[font as keyof ThemeType["textVariants"]].fontSize}</Text>
//                     <Text variant="p1" color="gray/500">Font weight : {theme.textVariants[font as keyof ThemeType["textVariants"]].fontFamily}</Text>
//                 </Box>
//             </Box>
//         })}
//     </Box>
// })
Object.keys(theme.textVariants).map((font) => {
    storyAPI.add(font, () => <Box width="90%">
        <Text variant={font as any} color="dark">{font} - The Quick brown fox jumps</Text>
        <Box>
            <Text variant="p1" color="gray/500">Font Size : {theme.textVariants[font as keyof ThemeType["textVariants"]].fontSize}</Text>
            <Text variant="p1" color="gray/500">Font weight : {theme.textVariants[font as keyof ThemeType["textVariants"]].fontFamily}</Text>
        </Box>
    </Box>

    )
});