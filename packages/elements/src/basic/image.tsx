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

//import { Image as RNImage, ImageProps as RNImageProps } from "react-native";
import { createImageProgress } from 'react-native-image-progress';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import type { Theme } from "../theme/default-theme";

const RNImage = createImageProgress(FastImage);

export type ImageProps = {

} //& RNImageProps
    & typeof RNImage.defaultProps
    & BackgroundColorProps<Theme>
    & OpacityProps<Theme>
    & VisibleProps<Theme>
    & LayoutProps<Theme>
    & SpacingProps<Theme>
    & BorderProps<Theme>
    & ShadowProps<Theme>
    & PositionProps<Theme>;

export const Image = createRestyleComponent<ImageProps, Theme>([
    backgroundColor, border, opacity, visible, layout, spacing, shadow, position
], RNImage);