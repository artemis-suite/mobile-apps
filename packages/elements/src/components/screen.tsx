import SafeAreaView from 'react-native-safe-area-view';
import type { Theme } from "../theme/default-theme";
import type { BackgroundColorProps, BorderProps, LayoutProps, PositionProps, SpacingProps } from '@shopify/restyle';

export type ScreenProps = {
    children?: React.ReactNode,
} & BackgroundColorProps<Theme> &
    LayoutProps<Theme> &
    PositionProps<Theme> &
    SpacingProps<Theme> &
    BorderProps<Theme>

export function Screen({ children, ...rest }: ScreenProps) {
    return <SafeAreaView {...rest}>
        {children}
    </SafeAreaView>
}

export default Screen;