import React from "react";
import { SafeAreaView } from "react-native";
import { Input, Box } from "@artemis-mobile/elements";

import { storiesOf } from '@storybook/react-native';

import { languageContext } from "../contexts";

const sampleText: Record<string, string> = {
    "RTL": "موبايل",
    "LTR": "Mobile"
}

storiesOf("Input", module)
    .addDecorator((story) => {
        return (
            <SafeAreaView>
                <Box padding="l">
                    {story()}
                </Box>
            </SafeAreaView>)
    }
    ).add("Default", () => <languageContext.Consumer>
        {(lang) => <Box>
            <Input.Text label={sampleText[lang]} placeholder="+46 70 999 99 99" icon="fa-mobile-alt" type="email-address" />
        </Box>}
    </languageContext.Consumer>
    )
