import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Settings from "profile/screens/settings";
import Me from "profile/screens/me";
import Languages from "profile/screens/languages";
import members from "profile/screens/members";

import { translateScope } from "app/i18n";

import { ProfileStackParamList } from "./types";
import { screenOptions } from "./common";
const profileStack = createNativeStackNavigator<ProfileStackParamList>();
const $t = translateScope("navigation")("profile");

const ProfileStackScreen = () => {
    return (
        <profileStack.Navigator initialRouteName="Settings" screenOptions={screenOptions}>
            <profileStack.Screen name="Settings" component={Settings} options={{ title: $t("Settings") }} />
            <profileStack.Screen name="Me" component={Me} options={{ title: $t("Me") }} />
            <profileStack.Screen name="Languages" component={Languages} options={{ title: $t("Languages") }} />
            <profileStack.Screen name="Members" component={members} options={{ title: $t("Members") }} />
        </profileStack.Navigator>)
}

export {
    ProfileStackScreen
}