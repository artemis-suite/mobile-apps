import { useState } from "react";

import { TextInput } from "../../basic/text-input";
import { Box } from "../../basic/box";
import { Text } from "../../basic/text";
import { Icon, IconProps } from "../icon";
import { Theme } from "../../theme/default-theme";

const colorMap: Record<InputState, keyof Theme["colors"]> = {
    "focus": "primary/400",
    "error": "error/400",
    "success": "success/400",
    "warning": "warning/400",
    "none": "gray/400"
}

export type InputState = "focus" | "error" | "success" | "warning" | "none";
export type InputTextProps = {
    icon?: IconProps["name"],
    label?: string,
    placeholder?: string,
    value?: string,
    onChange?: (value: string) => void,
    state?: Exclude<InputState, "focus">,
    type?: 'default' | 'email-address' | 'phone-pad' | 'number-pad' | 'decimal-pad',
    direction?: "RTL" | "LTR",
    disabled?: boolean
}

export function InputText({
    type = "default",
    state = "none",
    direction = "LTR",
    disabled = false,
    label,
    placeholder,
    icon,
    value,
    onChange }: InputTextProps) {
    const [stateOverride, setStateOverride] = useState<InputState>(state);
    return (<Box width="100%" flexDirection="column">
        <Text testID="label" width="100%" textAlign={direction === "LTR" ? "left" : "right"}>{label}</Text>
        <Box
            minHeight={42}
            marginVertical="s"
            padding="s"
            flexDirection={direction === "LTR" ? "row" : "row-reverse"}
            alignItems="center"
            borderRadius="m"
            borderStyle="solid"
            borderWidth={1}
            borderColor={colorMap[stateOverride]}
            backgroundColor={disabled ? "gray/200" : "transparent"}
        >
            {icon && <Icon name={icon} size="l" color={colorMap[stateOverride]} />}
            <TextInput
                selectTextOnFocus
                autoCorrect={false}
                textAlign={direction === "LTR" ? "left" : "right"}
                keyboardType={type}
                onFocus={() => setStateOverride("focus")}
                onEndEditing={() => setStateOverride(state)}
                value={value} onChangeText={onChange}
                flex={1} placeholder={placeholder}
                removeClippedSubviews
            />
        </Box>
    </Box >)
}

export default InputText