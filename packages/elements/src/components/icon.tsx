import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ColorProps, useTheme } from "@shopify/restyle";

import { faMobileAlt } from "@fortawesome/free-solid-svg-icons/faMobileAlt"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons/faChartLine";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt";

import { Theme } from '../theme/default-theme';

library.add(faMobileAlt, faArrowLeft, faHome, faChartLine, faCalendarAlt, faUserAlt);

export type IconProps = {
    name: "fa-mobile-alt" | "fa-arrow-left" | "fa-home" | "fa-chart-line" | "fa-calendar-alt" | "fa-user-alt"
    size?: "s" | "m" | "l" | "xl"
} & ColorProps<Theme>


export function Icon({ name, size = "m", color = "dark" }: IconProps) {
    const theme = useTheme<Theme>();
    return <FontAwesomeIcon icon={name as any}
        size={theme.spacing[size]}
        color={theme.colors[color.toString()]} />
}

export default Icon;