import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from 'auth/screens/splash';
import LandingScreen from "auth/screens/landing";
import LoginPhoneNumber from "auth/screens/login-phone-number";
import { useAuthSelector } from 'auth/slice';

import { RootStackParamList } from "./types";

const rootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
    const isLoggedIn = useAuthSelector("selectIsLoggedIn");
    const IsInitialized = useAuthSelector("selectIsInitialized");
    return <rootStack.Navigator>
        {
            IsInitialized === false
                ? <rootStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false, animation: "none" }} />
                : isLoggedIn
                    ? <rootStack.Screen name="Main" component={() => { return null; }} />
                    : <>
                        <rootStack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
                        <rootStack.Screen name="LoginPhoneNumber" component={LoginPhoneNumber} />
                        {/* <rootStack.Screen name="LoginVerification" component={() => null} /> */}
                    </>

        }
    </rootStack.Navigator>
}

export {
    RootStackScreen
}