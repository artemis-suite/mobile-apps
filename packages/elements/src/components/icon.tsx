import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ColorProps, useTheme } from "@shopify/restyle";

import { faMobileAlt } from "@fortawesome/free-solid-svg-icons/faMobileAlt"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft"

import { Theme } from '../theme/default-theme';

library.add(faMobileAlt, faArrowLeft);

export type IconProps = {
    name: "fa-mobile-alt" | "fa-arrow-left"
    size?: "s" | "m" | "l" | "xl"
} & ColorProps<Theme>


export function Icon({ name, size = "m", color = "dark" }: IconProps) {
    const theme = useTheme<Theme>();
    return <FontAwesomeIcon icon={name as any}
        size={theme.spacing[size]}
        color={theme.colors[color.toString()]} />
}

export default Icon;