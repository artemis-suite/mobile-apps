import { Icon as BaseIcon, IconProps as BaseIconProps } from "../icon"

export function Icon({ name, ...rest }: BaseIconProps) {
    return <BaseIcon
        name={name}
        size="l"
        color="dark"
        {...rest} />
}
export default Icon;