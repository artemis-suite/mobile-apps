import { createTheme } from "@shopify/restyle";

const theme = createTheme({
    colors: {
        "primary/100": "#ebeffe",
        "primary/200": "#CDD7FD",
        "primary/300": "#ABBDFC",
        "primary/400": "#859FFB",
        "primary/500": "#4E74F9",
        "prinary/600": "#083CF0",

        "gray/100": "#F4F4F8",
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
            fontSize: 16,
            fontWeight: "400",
            fontStyle: "normal",
        },
        h1: {
            fontSize: 34,
            fontWeight: "700",
            fontStyle: "normal",
        },
        h2: {
            fontSize: 32,
            fontWeight: "700",
            fontStyle: "normal",
        },
        h3: {
            fontSize: 24,
            fontWeight: "700",
            fontStyle: "normal",
        },
        h4: {
            fontSize: 20,
            fontWeight: "600",
            fontStyle: "normal",
        },
        p1b: {
            fontSize: 16,
            fontWeight: "700",
            fontStyle: "normal",
        },
        p1: {
            fontSize: 16,
            fontWeight: "400",
            fontStyle: "normal",
        },
        p2b: {
            fontSize: 14,
            fontWeight: "500",
            fontStyle: "normal",
        },
        p2: {
            fontSize: 14,
            fontWeight: "400",
            fontStyle: "normal"
        },
        p3b: {
            fontSize: 12,
            fontWeight: "500",
            fontStyle: "normal",
        },
        p3: {
            fontSize: 12,
            fontWeight: "400",
            fontStyle: "normal",
        },
        p4: {
            fontSize: 10,
            fontWeight: "400",
            fontStyle: "normal"
        },
        p5: {
            fontSize: 8,
            fontWeight: "400",
            fontStyle: "normal",
        }
    }
});


const LTRTheme = {
    ...theme,
    textVariants: {
        defaults: {
            ...theme.textVariants.defaults,
            fontFamily: "Poppins-Regular",
        },
        h1: {
            ...theme.textVariants.h1,
            fontFamily: "Poppins-Bold",
        },
        h2: {
            ...theme.textVariants.h2,
            fontFamily: "Poppins-Bold",
        },
        h3: {
            ...theme.textVariants.h3,
            fontFamily: "Poppins-Bold",
        },
        h4: {
            ...theme.textVariants.h4,
            fontFamily: "Poppins-SemiBold",
        },
        p1b: {
            ...theme.textVariants.p1b,
            fontFamily: "Poppins-SemiBold",
        },
        p1: {
            ...theme.textVariants.p1,
            fontFamily: "Poppins-Regular",
        },
        p2b: {
            ...theme.textVariants.p2b,
            fontFamily: "Poppins-Medium",
        },
        p2: {
            ...theme.textVariants.p2,
            fontFamily: "Poppins-Regular",
        },
        p3b: {
            ...theme.textVariants.p3b,
            fontFamily: "Poppins-Medium",
        },
        p3: {
            ...theme.textVariants.p3,
            fontFamily: "Poppins-Regular",
        },
        p4: {
            ...theme.textVariants.p4,
            fontFamily: "Poppins-Regular",
        },
        p5: {
            ...theme.textVariants.p5,
            fontFamily: "Poppins-Regular",
        }
    }
}

const RTLTheme = {
    ...theme,
    textVariants: {
        defaults: {
            ...theme.textVariants.defaults,
            fontFamily: "NotoSansArabic-Regular",
        },
        h1: {
            ...theme.textVariants.h1,
            fontFamily: "NotoSansArabic-Bold",
        },
        h2: {
            ...theme.textVariants.h2,
            fontFamily: "NotoSansArabic-Bold",
        },
        h3: {
            ...theme.textVariants.h3,
            fontFamily: "NotoSansArabic-Bold",
        },
        h4: {
            ...theme.textVariants.h4,
            fontFamily: "NotoSansArabic-SemiBold",
        },
        p1b: {
            ...theme.textVariants.p1b,
            fontFamily: "NotoSansArabic-SemiBold",
        },
        p1: {
            ...theme.textVariants.p1,
            fontFamily: "NotoSansArabic-Regular",
        },
        p2b: {
            ...theme.textVariants.p2b,
            fontFamily: "NotoSansArabic-Medium",
        },
        p2: {
            ...theme.textVariants.p2,
            fontFamily: "NotoSansArabic-Regular",
        },
        p3b: {
            ...theme.textVariants.p3b,
            fontFamily: "NotoSansArabic-Medium",
        },
        p3: {
            ...theme.textVariants.p3,
            fontFamily: "NotoSansArabic-Regular"
        },
        p4: {
            ...theme.textVariants.p4,
            fontFamily: "NotoSansArabic-Regular"
        },
        p5: {
            ...theme.textVariants.p5,
            fontFamily: "NotoSansArabic-Regular"
        }
    }
}

export type Theme = typeof theme;
export { LTRTheme, RTLTheme };