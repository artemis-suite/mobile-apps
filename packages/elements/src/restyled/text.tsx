import { Text as RNText } from "react-native";
import { createText, TextProps as RNTextProps } from "@shopify/restyle";

import { ThemeType } from "../theme/default-theme";

export type TextProps = RNTextProps<ThemeType>;
export const Text = createText<ThemeType>(RNText);