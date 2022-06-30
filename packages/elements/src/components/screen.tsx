import SafeAreaView from 'react-native-safe-area-view';
import type { Theme } from "../theme/default-theme";
import {
    BackgroundColorProps, backgroundColor,
    BorderProps, border,
    LayoutProps, layout,
    PositionProps, position,
    SpacingProps, spacing,
    useRestyle, composeRestyleFunctions
} from '@shopify/restyle';


type RestyleProps = BackgroundColorProps<Theme> &
    LayoutProps<Theme> &
    PositionProps<Theme> &
    SpacingProps<Theme> &
    BorderProps<Theme>


export type ScreenProps = {
    children?: React.ReactNode,
} & RestyleProps

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    backgroundColor, border, layout, position, spacing
]);
export function Screen({ children, ...rest }: ScreenProps) {
    // convert to any as a workaround for this issue
    // [https://github.com/Shopify/restyle/issues/159] 
    const props = useRestyle(restyleFunctions, {
        backgroundColor: "background" as keyof Theme["colors"],
        ...rest
    }) as any;

    return <SafeAreaView {...props}>
        {children}
    </SafeAreaView>
}

export default Screen;