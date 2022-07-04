import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from "@react-navigation/elements";

import { Text, Icon } from "@artemis-mobile/elements";

import SplashScreen from 'auth/screens/splash';
import LandingScreen from "auth/screens/landing";
import LoginPhoneNumber from "auth/screens/login-phone-number";
import { useAuthSelector } from 'auth/slice';
import { RootStackParamList } from "./types";

const rootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
    const isLoggedIn = useAuthSelector("selectIsLoggedIn");
    const IsInitialized = useAuthSelector("selectIsInitialized");
    return <rootStack.Navigator screenOptions={
        {
            headerShadowVisible: false,

        }}>
        {
            IsInitialized === false
                ? <rootStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false, animation: "none" }} />
                : isLoggedIn
                    ? <rootStack.Screen name="Main" component={() => { return null; }} />
                    : <>
                        <rootStack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false, animation: "fade" }} />
                        <rootStack.Screen name="LoginPhoneNumber" component={LoginPhoneNumber}
                            options={({ navigation }) => {
                                return {
                                    headerTitle: () =>
                                        <Text variant="h4">تسجيل دخول</Text>,
                                    headerLeft: ({ canGoBack }) =>
                                        <HeaderBackButton
                                            onPress={() => { canGoBack && navigation.goBack() }}
                                            backImage={() => <Icon name="fa-arrow-left" size="l" />} />
                                }
                            }
                            } />
                        {/* <rootStack.Screen name="LoginVerification" component={() => null} /> */}
                    </>

        }
    </rootStack.Navigator>
}

export {
    RootStackScreen
}