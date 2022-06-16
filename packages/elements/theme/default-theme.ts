import { createTheme } from "@shopify/restyle";

const palette = {
    black: "#000",
    white: "#fff",
    blue: "#4E74F9",
    darkBlue: "#5C5BFD",
    turquoise: "#2CB4EC",
    yellow: "#FFD037",
    red: "#E14B5A",
    lightBlack: "#161C2B",
    gray: "#848587",
    darkGray: "#6F6F79",
}


const theme = createTheme({
    colors: {
        primary: palette.blue,
        secondary: palette.turquoise,
        warning: palette.yellow,
        danger: palette.red,
        light: palette.white,
        dark: palette.black
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        longPhone: {
            width: 0,
            height: 812,
        },
        tablet: 768
    }
});

export type ThemeType = typeof theme;
export { theme };