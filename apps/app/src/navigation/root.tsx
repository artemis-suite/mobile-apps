import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from "./types";
import LandingScreen from "../screens/authentication/landing";

const rootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
    return <rootStack.Navigator initialRouteName="Landing">
        <rootStack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        {/* <rootStack.Screen name="LoginPhoneNumber" component={null} />
        <rootStack.Screen name="LoginVerification" component={null} />
        <rootStack.Screen name="Main" component={null} /> */}
    </rootStack.Navigator>
}

export {
    RootStackScreen
}