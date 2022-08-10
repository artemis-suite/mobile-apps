import { ImageProps, Image } from "react-native";
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

import { Theme } from "../../theme/default-theme";
import { images } from "../../theme/assets";

export const RestyledImage = createRestyleComponent<StaticImageProps, Theme>([
    backgroundColor, border, opacity, visible, layout, spacing, shadow, position
], Image);

export type StaticImageProps = {
    source: keyof typeof images
} & Omit<ImageProps, "source" | "borderRadius">
    & BackgroundColorProps<Theme>
    & OpacityProps<Theme>
    & VisibleProps<Theme>
    & LayoutProps<Theme>
    & SpacingProps<Theme>
    & BorderProps<Theme>
    & ShadowProps<Theme>
    & PositionProps<Theme>;

export function StaticImage({ source, ...rest }: StaticImageProps) {
    return <RestyledImage source={images[source]} {...rest} />
}

export default StaticImage;