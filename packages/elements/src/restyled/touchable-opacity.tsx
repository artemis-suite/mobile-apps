import { TouchableOpacity as RNTouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from "react-native";
import { createBox, BoxProps } from "@shopify/restyle";

import { Theme } from "../theme/default-theme";

export type TouchableOpacityProps = BoxProps<Theme> & RNTouchableOpacityProps
export const TouchableOpacity = createBox<Theme>(RNTouchableOpacity);
