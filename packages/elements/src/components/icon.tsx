import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ColorProps, useTheme } from "@shopify/restyle";

import { faMobileAlt } from "@fortawesome/free-solid-svg-icons/faMobileAlt"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons/faChartLine";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt";
import { faLanguage } from "@fortawesome/free-solid-svg-icons/faLanguage";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons/faPlusSquare";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons/faCircleChevronRight";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";

import { Theme } from '../theme/default-theme';

library.add(
    faMobileAlt, faArrowLeft, faHome, faChartLine, faCalendarAlt, faUserAlt, faLanguage,
    faPlusSquare, faLock, faCircleChevronRight, faCircle, faCircleCheck, faArrowRight);

export type IconProps = {
    name:
    "fa-mobile-alt" | "fa-arrow-left" | "fa-home" | "fa-chart-line" | "fa-calendar-alt" | "fa-user-alt" | "fa-language" |
    "fa-plus-square" | "fa-lock" | "fa-circle-chevron-right" | "fa-circle" | "fa-circle-check" | "fa-arrow-right"
    size?: "s" | "m" | "l" | "xl"
} & ColorProps<Theme>


export function Icon({ name, size = "m", color = "dark" }: IconProps) {
    const theme = useTheme<Theme>();
    return <FontAwesomeIcon icon={name as any}
        size={theme.spacing[size]}
        color={theme.colors[color.toString()]} />
}

export default Icon;