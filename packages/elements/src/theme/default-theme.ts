import { createTheme } from "@shopify/restyle";

const theme = createTheme({
    colors: {
        "primary/100": "#ebeffe",
        "primary/200": "#CDD7FD",
        "primary/300": "#ABBDFC",
        "primary/400": "#859FFB",
        "primary/500": "#4E74F9",
        "prinary/600": "#083CF0",

        "gary/100": "#F4F4F8",
        "gray/200": "#E9E9F1",
        "gray/300": "#CCCCD6",
        "gray/400": "#A3A3AE",
        "gray/500": "#6F6F79",
        "gray/600": "#515168",

        light: "#fff",
        dark: "#161C2B",
        background: "#FAFAFA",
        transparent: "transparent"
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
    },
    borderRadii: {
        m: 12
    },
    zIndices: {
        forward: 1,
        backward: -1
    },
    textVariants: {
        defaults: {
            fontFamily: "NotoSansArabic-Regular", //"Poppins-Regular",
            fontSize: 16,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 18,
        },
        h1: {
            fontFamily: "NotoSansArabic-Bold", //"Poppins-Bold",
            fontSize: 34,
            fontWeight: "700",
            fontStyle: "normal",
            lineHeight: 54,
        },
        h2: {
            fontFamily: "NotoSansArabic-Bold", //"Poppins-Bold",
            fontSize: 32,
            fontWeight: "700",
            fontStyle: "normal",
            lineHeight: 36,
        },
        h3: {
            fontFamily: "NotoSansArabic-Bold", //"Poppins-Bold",
            fontSize: 24,
            fontWeight: "700",
            fontStyle: "normal",
            lineHeight: 26
        },
        h4: {
            fontFamily: "NotoSansArabic-SemiBold", //"Poppins-SemiBold",
            fontSize: 20,
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: 22
        },
        p1b: {
            fontFamily: "NotoSansArabic-SemiBold", //"Poppins-SemiBold",
            fontSize: 16,
            fontWeight: "700",
            fontStyle: "normal",
            lineHeight: 21,
        },
        p1: {
            fontFamily: "NotoSansArabic-Regular",//"Poppins-Regular",
            fontSize: 16,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 18,
        },
        p2b: {
            fontFamily: "NotoSansArabic-Medium", //"Poppins-Medium",
            fontSize: 14,
            fontWeight: "500",
            fontStyle: "normal",
            lineHeight: 18,
        },
        p2: {
            fontFamily: "NotoSansArabic-Regular", //"Poppins-Regular",
            fontSize: 14,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 16,
        },
        p3b: {
            fontFamily: "NotoSansArabic-Medium", //"Poppins-Medium",
            fontSize: 12,
            fontWeight: "500",
            fontStyle: "normal",
            lineHeight: 16
        },
        p3: {
            fontFamily: "NotoSansArabic-Regular", //"Poppins-Regular",
            fontSize: 12,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 16
        },
        p4: {
            fontFamily: "NotoSansArabic-Regular", //"Poppins-Regular",
            fontSize: 10,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 13
        },
        p5: {
            fontFamily: "NotoSansArabic-Regular", //"Poppins-Regular",
            fontSize: 8,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 10
        }
    }
});

export type Theme = typeof theme;
export { theme };