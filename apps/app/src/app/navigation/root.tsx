import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from 'auth/screens/splash';
import LandingScreen from "auth/screens/landing";
import LoginPhoneNumberScreen from "auth/screens/login-phone-number";
import VerifyPhoneNumberScreen from "auth/screens/verify-phone-number";
import { useAuthAction, useAuthSelector } from 'auth/slice';

import { TabsScreen } from "./tabs";
import { RootStackParamList } from "./types";
import { screenOptions } from "./common";


const rootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
    const isAuthenticated = useAuthSelector("selectIsAuthenticated");
    const IsInitialized = useAuthSelector("selectIsInitialized");
    const subscribeToLoginChange = useAuthAction("subscribeToLoginChange");
    const unsbscribeToLoginChange = useAuthAction("unsubscribeToLoginChange");

    useEffect(() => {
        subscribeToLoginChange();
        return unsbscribeToLoginChange;
    }, []);

    //TODO: refactor the screenOptions to make it more generic
    return <rootStack.Navigator screenOptions={{ headerShadowVisible: false }}>
        {
            IsInitialized === false
                ? <rootStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false, animation: "none" }} />
                : isAuthenticated
                    ? <rootStack.Screen name="Main" component={TabsScreen} options={{ headerShown: false }} />
                    : <>
                        <rootStack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false, animation: "fade" }} />
                        <rootStack.Group screenOptions={screenOptions}>
                            <rootStack.Screen name="LoginPhoneNumber" component={LoginPhoneNumberScreen} options={{ title: "تسجيل دخول" }} />
                            <rootStack.Screen name="LoginVerification" component={VerifyPhoneNumberScreen} options={{ title: "تسجيل دخول" }} />
                        </rootStack.Group>
                    </>

        }
    </rootStack.Navigator>
}

export {
    RootStackScreen
}