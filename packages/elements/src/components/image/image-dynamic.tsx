import {
    BackgroundColorProps, backgroundColor,
    BorderProps, border,
    LayoutProps, layout,
    OpacityProps, opacity,
    PositionProps, position,
    ShadowProps, shadow,
    SpacingProps, spacing,
    VisibleProps, visible,
    createRestyleComponent,
    useRestyle,
    composeRestyleFunctions
} from "@shopify/restyle";

//import { Image as RNImage, ImageProps as RNImageProps } from "react-native";
import { createImageProgress } from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
import * as Progress from 'react-native-progress';

import { Theme, useAppTheme } from "../../theme/default-theme";


const RNImage = createImageProgress(FastImage);

export type ImageProps = {

}
    & typeof RNImage.defaultProps
    & BackgroundColorProps<Theme>
    & OpacityProps<Theme>
    & VisibleProps<Theme>
    & LayoutProps<Theme>
    & SpacingProps<Theme>
    & BorderProps<Theme>
    & ShadowProps<Theme>
    & PositionProps<Theme>;

// export const Image = createRestyleComponent<ImageProps, Theme>([
//     backgroundColor, border, opacity, visible, layout, spacing, shadow, position
// ], RNImage);


export type DynamicImageProps = {
    source: string
} & Omit<ImageProps, "source" | "imageStyle">

export function DynamicImage({ source, width, height, ...rest }: DynamicImageProps) {
    const theme = useAppTheme();
    const restyledPorps = useRestyle(
        composeRestyleFunctions([backgroundColor, border, opacity, visible, layout, spacing, shadow, position]),
        { ...rest, width, height })
    return <RNImage
        source={{ uri: source }}
        indicator={Progress.Pie}
        indicatorProps={{
            size: width,
            borderWidth: 0,
            color: theme.colors["primary/500"],
            unfilledColor: theme.colors.light
        }}
        imageStyle={restyledPorps.style}
        {...restyledPorps} />
}

export default DynamicImage;