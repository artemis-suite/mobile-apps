import { TouchableOpacity, TouchableOpacityProps } from "../restyled/touchable-opacity";
import { Text, TextProps } from "../restyled/text";

type ButtonVariant = "primary" | "outlined" | "disabled" | "noBorder";
type ButtonSize = "large" | "small";

const variantMap = {
    container: {
        "base": {
            borderRadius: "m",
            borderStyle: "solid",
            justifyContent: "center",
            alignItems: "center"
        },
        "primary": {
            shadowColor: "dark",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            backgroundColor: "primary/500"
        },
        "outlined": {
            borderColor: "primary/500",
            backgroundColor: "transparent",
            borderWidth: 1
        },
        "disabled": {
            backgroundColor: "gray/200"
        },
        "noBorder": {
            borderWidth: 0
        }
    } as Record<ButtonVariant | "base", TouchableOpacityProps>,
    text: {
        "base": {
            variant: "p1b",
        },
        "primary": {
            color: "light"
        },
        "outlined": {
            color: "primary/500"
        },
        "disabled": {
            color: "gray/500"
        },
        "noBorder": {
            color: "primary/500"
        }
    } as Record<ButtonVariant | "base", TextProps>,
    size: {
        "large": {
            width: 335
        },
        "small": {
            width: 158
        }
    } as Record<ButtonSize, TouchableOpacityProps>
}

export interface ButtonProps {
    variant?: ButtonVariant
    size?: ButtonSize,
    icon?: string,
    label?: string,
    labelSpacing?: number,
    onPress?: TouchableOpacityProps["onPress"],
    onLongPress?: TouchableOpacityProps["onLongPress"],
}

export function Button({ variant = "primary", size = "small", icon, label = "", labelSpacing = 1, ...rest }: ButtonProps) {
    return (<TouchableOpacity
        height={54}
        {...variantMap.size[size]}
        {...variantMap.container.base}
        {...variantMap.container[variant]}
        {...rest}
    >
        <Text
            letterSpacing={labelSpacing}
            {...variantMap.text.base}
            {...variantMap.text[variant]}
        >{label}</Text>
    </TouchableOpacity>);
}

export default Button;