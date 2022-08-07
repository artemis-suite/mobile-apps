import { Text, Icon } from "@artemis-mobile/elements";
import { HeaderBackButton } from "@react-navigation/elements";

export const screenOptions = ({ navigation }) => {
    return {
        headerShadowVisible: false,
        headerTitle: ({ children }) =>
            <Text variant="h4">{children}</Text>,
        headerLeft: ({ canGoBack }) =>
            canGoBack
                ? (<HeaderBackButton
                    onPress={() => { navigation.goBack() }}
                    backImage={() => <Icon name="fa-arrow-left" size="l" />} />)
                : null
    }
}