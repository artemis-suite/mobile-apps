import { Box, BoxProps } from "../../basic/box";

export type ContentProps = {
    children?: React.ReactNode
} & BoxProps

export function Content({ children, ...rest }: ContentProps) {
    return <Box {...rest}>
        {children}
    </Box>
}
export default Content;