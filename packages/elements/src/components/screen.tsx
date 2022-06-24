import SafeAreaView from 'react-native-safe-area-view';
import type { ThemeType } from "../theme/default-theme";
import type { BackgroundColorProps, BorderProps, LayoutProps, PositionProps, SpacingProps } from '@shopify/restyle';

export type ScreenProps = {
    children?: React.ReactNode,
} & BackgroundColorProps<ThemeType> &
    LayoutProps<ThemeType> &
    PositionProps<ThemeType> &
    SpacingProps<ThemeType> &
    BorderProps<ThemeType>

export function Screen({ children, ...rest }: ScreenProps) {
    return <SafeAreaView {...rest}>
        {children}
    </SafeAreaView>
}

export default Screen;