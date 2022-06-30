import { useTheme } from "@shopify/restyle";
import { PulseIndicator as Indicator } from "react-native-indicators";
import type { Theme } from "../theme/default-theme";

export type ActivityIndicatorProps = {
    color?: keyof Theme["colors"],
    size?: number
}

export function ActivityIndicator({ color = "primary/500", size = 40 }: ActivityIndicatorProps) {
    const theme = useTheme<Theme>();
    return <Indicator color={theme.colors[color]} size={size} />
}

export default ActivityIndicator;