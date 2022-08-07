import React from "react";
import { Box, BoxProps } from "../../basic/box";
import { TouchableOpacity } from "../../basic/touchable-opacity";

export type ItemProps = {
    onPress?: () => void,
    children?: React.ReactNode,
    disabled?: boolean,
    topDivider?: boolean,
    bottomDivider?: boolean,
} & BoxProps

export function Item({
    onPress,
    children,
    disabled,
    topDivider,
    bottomDivider,
    ...rest
}: ItemProps) {
    const Comp = onPress ? TouchableOpacity : Box;
    const length = React.Children.count(children);
    return (
        <Comp
            flexDirection="row"
            alignItems="center"
            padding="s"
            borderColor="gray/200"
            borderTopWidth={topDivider ? 1 : 0}
            borderBottomWidth={bottomDivider ? 1 : 0}
            disabled={disabled}
            onPress={!disabled && onPress}
            {...rest}>
            {
                React.Children.map(
                    children,
                    (child, index) =>
                        child && [
                            child,
                            index !== length - 1 && <Box paddingLeft="s" />,
                        ]
                )
            }
        </Comp>
    )
}
export default Item;