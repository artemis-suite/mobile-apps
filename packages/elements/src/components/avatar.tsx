import { Box, BoxProps } from "./../basic/box";

import { Dynamic } from "./image";
import { Static } from "./image";

export type AvatarProps = {
    source: string,
    size?: "xl" | "l" | "s"
} & BoxProps

const sizeMap = {
    xl: 200,
    l: 100,
    s: 50
}

export function Avatar({ source, size = "s", ...rest }: AvatarProps) {
    return (<Box {...rest}>
        {source ? <Dynamic
            source={source}
            width={sizeMap[size]}
            height={sizeMap[size]}
            borderRadius={size === "s" ? "avatar-small" : "avatar-large"}
            renderError={() => <Static source="missing_avatar" />}
        /> :
            <Static
                width={sizeMap[size]}
                height={sizeMap[size]}
                borderRadius={size === "s" ? "avatar-small" : "avatar-large"}
                source="missing_avatar" />}
    </Box>);
}
export default Avatar;