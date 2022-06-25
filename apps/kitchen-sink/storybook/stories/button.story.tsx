import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Text, Box, ThemeProvider, theme, Theme } from "@artemis-mobile/elements";

import { storiesOf } from '@storybook/react-native';

storiesOf("Button", module)
    .addDecorator(story =>
        <ThemeProvider theme={theme}>
            <SafeAreaView>
                <Box padding="l">
                    {story()}
                </Box>
            </SafeAreaView>
        </ThemeProvider>
    )
    .add("Primary Large", () => <Box>
        <Button variant="primary" size="large" label="Button" />
    </Box>
    )
    .add("Outlined Large", () => <Box>
        <Button variant="outlined" size="large" label="Button" />
    </Box>
    )
    .add("Primary Large with Icon", () => <Box>
        <Button variant="primary" size="large" label="Button" />
    </Box>
    )
    .add("Disabled Large", () => <Box>
        <Button variant="disabled" size="large" label="Button" />
    </Box>
    )
    //===================================
    .add("Primary Small", () => <Box>
        <Button variant="primary" size="small" label="Button" />
    </Box>
    )
    .add("Outlined Small", () => <Box>
        <Button variant="outlined" size="small" label="Button" />
    </Box>
    )
    .add("Link Button", () => <Box>
        <Button variant="noBorder" size="small" label="Button" />
    </Box>
    )
    .add("Disabled Small", () => <Box>
        <Button variant="disabled" size="small" label="Button" />
    </Box>
    )