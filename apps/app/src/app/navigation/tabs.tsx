import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { createBottomTabNavigator, BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { Icon, Box, Text, AnimatedBox, PressableArea, useAppTheme, IconProps } from "@artemis-mobile/elements";

//TODO: should be removed, use only to remove warning
import HomeScreen from "../../features/contacts/screens/home";

import { ProfileStackScreen } from "./profile";

import { MainTabsParamList } from "./types";

const bottomTabs = createBottomTabNavigator<MainTabsParamList>();

//TODO: move this component to elements in a generic way
const TabButton = (props: BottomTabBarButtonProps & { icon: IconProps["name"], label: string }) => {
    const { onPress, accessibilityState, icon, label } = props;
    const focused = accessibilityState.selected;

    const animationValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (focused) {
            Animated.timing(animationValue, {
                toValue: 1,
                duration: 500,
                easing: Easing.bounce,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(animationValue, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,

            }).start();
        }
    }, [focused])

    return (
        <PressableArea
            onPress={onPress}
            activeOpacity={1}
            justifyContent="center"
            alignItems="center"
            flex={focused ? 1 : 0.65}>
            <Box>
                <AnimatedBox
                    style={{
                        transform: [{
                            scale: animationValue
                        }]
                    }}
                    position="absolute"
                    left={0}
                    right={0}
                    top={0}
                    bottom={0}
                    backgroundColor="primary/100"
                    borderRadius="m" />
                <Box
                    flexDirection="row"
                    alignItems="center"
                    padding="s"
                    borderRadius="s">
                    <Icon name={icon} color={focused ? "primary/500" : "dark"} />
                    <AnimatedBox style={{
                        transform: [{
                            scale: animationValue
                        }]
                    }}>
                        {focused && <Text
                            color="primary/500"
                            paddingHorizontal="s">{label}</Text>}
                    </AnimatedBox>
                </Box>
            </Box>
        </PressableArea>
    )
}

export const TabsScreen = () => {
    const theme = useAppTheme();
    return <bottomTabs.Navigator
        screenOptions={{
            tabBarStyle: {
                height: 100,
                borderTopWidth: 0,
                borderTopRightRadius: theme.borderRadii.l,
                borderTopLeftRadius: theme.borderRadii.l,
                borderColor: theme.colors.light,
                backgroundColor: theme.colors.light,
                shadowColor: theme.colors.dark,
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.5,
                shadowRadius: 20
            }
        }}
    >
        <bottomTabs.Screen
            name="Contacts"
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarButton: (props) => <TabButton {...props} icon="fa-home" label="Home" />
            }} />
        <bottomTabs.Screen
            name="Reports"
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarButton: (props) => <TabButton {...props} icon="fa-chart-line" label="Reports" />
            }} />
        <bottomTabs.Screen
            name="Calendar"
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarButton: (props) => <TabButton {...props} icon="fa-calendar-alt" label="Calendar" />
            }} />
        <bottomTabs.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                headerShown: false,
                tabBarButton: (props) => <TabButton {...props} icon="fa-user-alt" label="Profile" />
            }} />
    </bottomTabs.Navigator >
}