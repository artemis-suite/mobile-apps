import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainTabsParamList } from "./types";

const bottomTabs = createBottomTabNavigator<MainTabsParamList>();

export const tabsScreen = () => {
    return <bottomTabs.Navigator>
        <bottomTabs.Screen name="Contacts" component={() => null} options={{ headerShown: false }} />
        <bottomTabs.Screen name="Reports" component={() => null} />
        <bottomTabs.Screen name="Notifications" component={() => null} />
        <bottomTabs.Screen name="Profile" component={() => null} />
    </bottomTabs.Navigator>
}