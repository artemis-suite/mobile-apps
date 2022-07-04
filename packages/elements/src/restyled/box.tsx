import { View } from "react-native";
import { createBox, BoxProps as RNBoxPors } from "@shopify/restyle";

import type { Theme } from "../theme/default-theme";

export type BoxProps = RNBoxPors<Theme>;
export const Box = createBox<Theme>(View);