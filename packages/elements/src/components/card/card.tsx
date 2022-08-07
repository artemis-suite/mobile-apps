import React from "react";
import { Box, BoxProps } from "../../basic/box";

export type CardProps = {
    children?: React.ReactNode
} & BoxProps


export function Card({ children, ...rest }: CardProps) {
    return (<Box
        backgroundColor="light"
        borderColor="gray/200"
        borderWidth={1}
        borderRadius="s"
        padding="xs"
        margin="xs"
        {...rest}>
        {children}
    </Box>)
}

export default Card;