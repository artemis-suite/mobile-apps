import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from "@react-navigation/elements";

import { Text, Icon } from "@artemis-mobile/elements";

import { TabsScreen } from "./tabs";
import SplashScreen from 'auth/screens/splash';
import LandingScreen from "auth/screens/landing";
import LoginPhoneNumberScreen from "auth/screens/login-phone-number";
import VerifyPhoneNumberScreen from "auth/screens/verify-phone-number";

import { useAuthAction, useAuthSelector } from 'auth/slice';
import { RootStackParamList } from "./types";

const rootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
    const isAuthenticated = useAuthSelector("selectIsAuthenticated");
    const IsInitialized = useAuthSelector("selectIsInitialized");
    const listenToLoginChange = useAuthAction("listenToLoginChange");

    useEffect(() => {
        listenToLoginChange();
    }, []);

    return <rootStack.Navigator screenOptions={{ headerShadowVisible: false }}>
        {
            IsInitialized === false
                ? <rootStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false, animation: "none" }} />
                : isAuthenticated
                    ? <rootStack.Screen name="Main" component={TabsScreen} options={{ headerShown: false }} />
                    : <>
                        <rootStack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false, animation: "fade" }} />
                        <rootStack.Group screenOptions={({ navigation }) => {
                            return {
                                headerTitle: ({ children }) =>
                                    <Text variant="h4">{children}</Text>,
                                headerLeft: ({ canGoBack }) =>
                                    <HeaderBackButton
                                        onPress={() => { canGoBack && navigation.goBack() }}
                                        backImage={() => <Icon name="fa-arrow-left" size="l" />} />
                            }
                        }}>
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