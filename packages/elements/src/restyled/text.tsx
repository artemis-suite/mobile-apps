import { Text as RNText, TextProps as RNTextProps } from "react-native";
import {
    createRestyleComponent, textRestyleFunctions,
    PositionProps, position,
    LayoutProps, layout,
    TextProps as SRTextProps
} from "@shopify/restyle";

import { Theme } from "../theme/default-theme";

//export type TextProps = RNTextProps<Theme>;
//export const Text = createText<Theme>(RNText);

export type TextProps =
    RNTextProps &
    SRTextProps<Theme> &
    PositionProps<Theme> &
    LayoutProps<Theme>
    & {
        children?: React.ReactNode
    }
export const Text = createRestyleComponent<TextProps, Theme>(
    [...textRestyleFunctions, position, layout],
    (props) => <RNText {...props} />
)

export default Text;
