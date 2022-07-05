import { useMemo, useState } from "react";
import { TextInput } from "react-native";

import { Box } from "../basic/box";
import { Text } from "../basic/text";

export type VerificationCodeProps = {
    length?: number;
    onSubmit?: (value: string) => void;
}

export function VerificationCode({ length = 6, onSubmit = () => { } }: VerificationCodeProps) {

    const lengthArray = useMemo(() => new Array(length).fill(0), [length]);
    const [code, setCode] = useState('');

    const toDigitInput = (_, index: number) => {
        const emptyInputChar = '';
        const digit = code[index] || emptyInputChar;
        return (
            <Box key={index}
                flexDirection="row"
                justifyContent='center'
                minHeight={53}
                margin="xs"
                borderColor="gray/300"
                borderWidth={1}
                borderRadius="s"
                flex={1}>
                <Text variant="h3">{digit}</Text>
            </Box>
        );
    };

    return (
        <Box flexDirection="row">
            {lengthArray.map(toDigitInput)}
            <TextInput
                style={{
                    opacity: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "auto",
                    height: "auto"
                }}
                value={code}
                onChangeText={(val) => {
                    setCode(val);
                    if (val.length === length)
                        onSubmit(val);
                }}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                returnKeyType="done"
                maxLength={length}
                onSubmitEditing={() => onSubmit(code)}
            />
        </Box>
    );
}

export default VerificationCode;