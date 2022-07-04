import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainTabsParamList } from "./types";

const bottomTabs = createBottomTabNavigator<MainTabsParamList>();

const BottomTabsScreen = () => {
    return <bottomTabs.Navigator>
        <bottomTabs.Screen name="Contacts" component={null} />
        <bottomTabs.Screen name="Reports" component={null} />
        <bottomTabs.Screen name="Notifications" component={null} />
        <bottomTabs.Screen name="Profile" component={null} />
    </bottomTabs.Navigator>
}

export {
    BottomTabsScreen
}