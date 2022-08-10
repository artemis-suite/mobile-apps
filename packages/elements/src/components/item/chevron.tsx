import { Icon as BaseIcon, IconProps as BaseIconProps } from "../icon"
import { Box } from "../box";

export function Chevron(props: Omit<BaseIconProps, "name">) {
    return (<Box alignItems="flex-end" flexGrow={1}>
        <BaseIcon
            name="fa-circle-chevron-right"
            size="l"
            color="dark"
            {...props} />
    </Box>)
}
export default Chevron;