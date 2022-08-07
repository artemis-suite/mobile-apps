import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Settings from "profile/screens/settings";
import Me from "profile/screens/me";
import Languages from "profile/screens/languages";
import members from "profile/screens/members";

import { ProfileStackParamList } from "./types";
import { screenOptions } from "./common";
const profileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackScreen = () => {
    return (<profileStack.Navigator initialRouteName="Settings" screenOptions={screenOptions}>
        <profileStack.Screen name="Settings" component={Settings} />
        <profileStack.Screen name="Me" component={Me} />
        <profileStack.Screen name="Languages" component={Languages} />
        <profileStack.Screen name="Members" component={members} />
    </profileStack.Navigator>)
}

export {
    ProfileStackScreen
}