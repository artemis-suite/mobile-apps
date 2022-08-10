import { Box, BoxProps } from "../../basic/box";

import { Dynamic } from "../image";
import { Static } from "../image";

export type AvatarProps = {
    source: string,
    size?: "l" | "s"
} & BoxProps

export function Avatar({ source, size = "s", ...rest }: AvatarProps) {
    return (<Box {...rest}>
        {source ? <Dynamic
            source={source}
            width={size === "s" ? 50 : 100}
            height={size === "s" ? 50 : 100}
            borderRadius={size === "s" ? "avatar-small" : "avatar-large"}
            renderError={() => <Static source="missing_avatar" />}
        /> :
            <Static
                width={size === "s" ? 50 : 100}
                height={size === "s" ? 50 : 100}
                source="missing_avatar" />}
    </Box>);
}
export default Avatar;