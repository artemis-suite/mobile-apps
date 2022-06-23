import { View } from "react-native";
import { createBox, BoxProps as RNBoxPors } from "@shopify/restyle";

import { ThemeType } from "../theme/default-theme";

export type BoxProps = RNBoxPors<ThemeType>;
export const Box = createBox<ThemeType>(View);