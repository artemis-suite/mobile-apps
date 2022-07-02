import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Text, Box } from "@artemis-mobile/elements";

import { storiesOf } from '@storybook/react-native';

import { languageContext } from "../contexts";

const sampleText: Record<string, string> = {
    "RTL": "اضغط هنا",
    "LTR": "Click here"
}

storiesOf("Button", module)
    .addDecorator((story) => {
        return (
            <SafeAreaView>
                <Box padding="l">
                    {story()}
                </Box>
            </SafeAreaView>)
    }
    )
    .add("Primary Large", () => <languageContext.Consumer>
        {(lang) => <Box>
            <Button variant="primary" size="large" label={sampleText[lang]} />
        </Box>}
    </languageContext.Consumer>
    )
    .add("Outlined Large", () => <languageContext.Consumer>
        {(lang) => <Box>
            <Button variant="outlined" size="large" label={sampleText[lang]} />
        </Box>}
    </languageContext.Consumer>
    )
    .add("Primary Large with Icon", () => <languageContext.Consumer>
        {(lang) => <Box>
            <Button variant="primary" size="large" label={sampleText[lang]} />
        </Box>}
    </languageContext.Consumer>
    )
    .add("Disabled Large", () => <languageContext.Consumer>
        {(lang) =>
            <Box>
                <Button variant="disabled" size="large" label={sampleText[lang]} />
            </Box>}
    </languageContext.Consumer>
    )
    //===================================
    .add("Primary Small", () => <languageContext.Consumer>
        {(lang) => <Box>
            <Button variant="primary" size="small" label={sampleText[lang]} />
        </Box>}
    </languageContext.Consumer>
    )
    .add("Outlined Small", () => <languageContext.Consumer>
        {(lang) => <Box>
            <Button variant="outlined" size="small" label={sampleText[lang]} />
        </Box>}
    </languageContext.Consumer>
    )
    .add("Link Button", () => <languageContext.Consumer>
        {(lang) => <Box>
            <Button variant="noBorder" size="small" label={sampleText[lang]} />
        </Box>
        }
    </languageContext.Consumer>
    )
    .add("Disabled Small", () => <languageContext.Consumer>
        {(lang) => <Box>
            <Button variant="disabled" size="small" label={sampleText[lang]} />

        </Box>}
    </languageContext.Consumer>
    )