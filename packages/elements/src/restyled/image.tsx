import {
    BackgroundColorProps, backgroundColor,
    BorderProps, border,
    LayoutProps, layout,
    OpacityProps, opacity,
    PositionProps, position,
    ShadowProps, shadow,
    SpacingProps, spacing,
    VisibleProps, visible,
    createRestyleComponent
} from "@shopify/restyle";
import { Image as RNImage, ImageProps as RNImageProps } from "react-native";

import { ThemeType } from "../theme/default-theme";

export type ImageProps = {

} & RNImageProps
    & BackgroundColorProps<ThemeType>
    & OpacityProps<ThemeType>
    & VisibleProps<ThemeType>
    & LayoutProps<ThemeType>
    & SpacingProps<ThemeType>
    & BorderProps<ThemeType>
    & ShadowProps<ThemeType>
    & PositionProps<ThemeType>;

export const Image = createRestyleComponent<ImageProps, ThemeType>([
    backgroundColor, border, opacity, visible, layout, spacing, shadow, position
], RNImage);