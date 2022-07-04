import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native";
import { BoxProps, createBox } from "@shopify/restyle";

import { Theme } from "../theme/default-theme";

export type TextInputProps = BoxProps<Theme> & RNTextInputProps
export const TextInput = createBox<Theme, TextInputProps>(RNTextInput);
