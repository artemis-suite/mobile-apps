import { Text, Icon } from "@artemis-mobile/elements";
import { HeaderBackButton } from "@react-navigation/elements";
import i18n from "app/i18n";

export const screenOptions = ({ navigation }) => {

    return {
        headerShadowVisible: false,
        headerTitle: ({ children }) =>
            <Text variant="h4">{children}</Text>,
        headerLeft: ({ canGoBack }) =>
            canGoBack
                ? (<HeaderBackButton
                    onPress={() => { navigation.goBack() }}
                    backImage={() => <Icon name={i18n.dir() === "rtl" ? "fa-arrow-right" : "fa-arrow-left"} size="l" />} />)
                : null
    }
}