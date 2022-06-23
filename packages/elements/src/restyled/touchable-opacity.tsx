import { TouchableOpacity as RNTouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from "react-native";
import { createBox, BoxProps } from "@shopify/restyle";

import { ThemeType } from "../theme/default-theme";

export type TouchableOpacityProps = BoxProps<ThemeType> & RNTouchableOpacityProps
export const TouchableOpacity = createBox<ThemeType>(RNTouchableOpacity);
