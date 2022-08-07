import { useCallback } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Screen, Card, Text, Item, Box } from "@artemis-mobile/elements";

import { useProfileAction } from "profile/slice";

import { ProfileStackScreenProps } from "app/navigation/types"
import { useAppSelector } from "app/store";
import { selectCurrentProfile } from "app/selectors";

type ScreenProps = ProfileStackScreenProps<"Settings">;

const ProfileCard = () => {
    const navigation = useNavigation<ScreenProps["navigation"]>();
    const user = useAppSelector(selectCurrentProfile);
    return <Card>
        <Item alignItems="flex-start" onPress={() => navigation.navigate("Me")}>
            <Item.Avatar source={user.photoURL} size="l" />
            <Item.Content>
                <Box flexDirection="row">
                    <Text variant="p1b">{user.displayName || "<<No Name>>"}</Text>
                </Box>
                <Box flexDirection="row">
                    <Text variant="p2b">Last Login </Text>
                    <Text variant="p2">{new Date(user.lastLoginDate).toDateString()}</Text>
                </Box>
                <Box flexDirection="row">
                    <Text variant="p2b">{user.role}</Text>
                </Box>
            </Item.Content>
        </Item>
    </Card>
}

const LanguageCard = () => {
    return (<Card>
        <Item>
            <Item.Icon name="fa-language" />
            <Item.Content flexDirection="row" flex={1} justifyContent="space-between">
                <Text variant="p1b">Language</Text>
                <Text variant="p1" textAlign="right"  >Arabic</Text>
            </Item.Content>
        </Item>
    </Card>);
}

const MembersCard = () => {
    return (<Card>
        <Item bottomDivider>
            <Item.Content alignItems="center" flex={1}>
                <Text>No Members Yet Add one</Text>
            </Item.Content>
        </Item>
        <Item justifyContent="flex-end">
            <Item.Content>
                <Text variant="p1b" color="primary/600">Add</Text>
            </Item.Content>
            <Item.Icon name="fa-plus-square" color="primary/600" />
        </Item>
    </Card>)
}

const LogoutCard = () => {
    const logoutAction = useProfileAction("logout");
    const onLogoutPress = useCallback(() => {
        Alert.alert(
            "Are you sure you want to logout?",
            "", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "OK",
                style: "default",
                onPress: () => logoutAction()
            }
        ])
    }, [logoutAction]);

    return (
        <Card>
            <Item onPress={onLogoutPress}>
                <Item.Icon name="fa-lock" color="error/600" />
                <Item.Content>
                    <Text variant="p1b" color="error/600">Logout</Text>
                </Item.Content>
            </Item>
        </Card>);
}

export default function SettingsScreen() {
    return (
        <Screen paddingHorizontal="l">
            <ProfileCard />
            <LanguageCard />
            <MembersCard />
            <LogoutCard />
        </Screen>);
}