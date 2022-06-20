import { View } from "react-native";
import { createBox } from "@shopify/restyle";

import { ThemeType } from "../theme/default-theme";

export const Box = createBox<ThemeType>(View);