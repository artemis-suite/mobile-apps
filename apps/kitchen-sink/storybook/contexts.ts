import { createContext } from "react";
import { ThemeProvider, RTLTheme, LTRTheme } from "@artemis-mobile/elements";

export const languageContext = createContext("LTR");
export const contexts = [
    {
        icon: 'paintbrush', // a icon displayed in the Storybook toolbar to control contextual props
        title: 'Themes', // an unique name of a contextual environment
        components: [
            ThemeProvider,
            languageContext.Provider
        ],
        params: [
            // an array of params contains a set of predefined `props` for `components`
            { name: 'RTL', props: { theme: RTLTheme, value: "RTL" } },
            { name: 'LTR', props: { theme: LTRTheme, value: "LTR" }, default: true },
        ],
        options: {
            deep: true, // pass the `props` deeply into all wrapping components
            disable: false, // disable this contextual environment completely
            cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
        },
    },
];