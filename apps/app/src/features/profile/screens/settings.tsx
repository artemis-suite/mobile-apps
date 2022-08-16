import { useCallback } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Flag from 'react-native-flags-typescript';

import { Screen, Card, Text, Item, Box } from "@artemis-mobile/elements";

import { useProfileAction } from "profile/slice";

import { ProfileStackScreenProps } from "app/navigation/types"
import { useAppSelector } from "app/store";
import { selectCurrentProfile } from "app/selectors";
import { useLocal, translateScope, formatDate } from "app/i18n";

type ScreenProps = ProfileStackScreenProps<"Settings">;

const $t = translateScope("profile")("settings");

const ProfileCard = () => {
    const navigation = useNavigation<ScreenProps["navigation"]>();
    const user = useAppSelector(selectCurrentProfile);
    return <Card>
        <Item alignItems="flex-start" onPress={() => navigation.navigate("Me")}>
            <Item.Avatar source={user.photoURL} size="l" />
            <Item.Content>
                <Box flexDirection="row">
                    <Text variant="p1b">{user.displayName || $t("noNameText")}</Text>
                </Box>
                <Box>
                    <Text variant="p2b">{$t("lastLoginLabel")}</Text>
                    <Text variant="p2">{formatDate(user.lastLoginDate)}</Text>
                </Box>
                <Box flexDirection="row">
                    <Text variant="p2b">{user.role}</Text>
                </Box>
            </Item.Content>
        </Item>
    </Card>
}

const LanguageCard = () => {
    const { language } = useLocal();
    const languagesMap = {
        "en": "GB",
        "ar": "EG",
        "sv": "SE"
    }
    const navigation = useNavigation<ScreenProps["navigation"]>();
    return (<Card>
        <Item onPress={() => navigation.navigate("Languages")}>
            <Item.Icon name="fa-language" />
            <Item.Content flexDirection="row" flex={1} justifyContent="space-between">
                <Text variant="p1b">{$t("languageLabel")}</Text>
                <Flag code={languagesMap[language]} type="flat" size={24} style={{ alignSelf: "center" }} />
            </Item.Content>
        </Item>
    </Card>);
}

const MembersCard = () => {
    return (<Card>
        <Item bottomDivider>
            <Item.Content alignItems="center" flex={1}>
                <Text>{$t("noMembersMessage")}</Text>
            </Item.Content>
        </Item>
        <Item justifyContent="flex-end">
            <Item.Content>
                <Text variant="p1b" color="primary/600">{$t("inviteMemberButton")}</Text>
            </Item.Content>
            <Item.Icon name="fa-plus-square" color="primary/600" />
        </Item>
    </Card>)
}

const LogoutCard = () => {
    const logoutAction = useProfileAction("logout");
    const onLogoutPress = useCallback(() => {
        Alert.alert(
            $t("logoutConfirmationMessage"),
            "", [
            {
                text: $t("logoutConfirmationCancelButton"),
                style: "cancel"
            },
            {
                text: $t("logoutConfirmationOkButton"),
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
                    <Text variant="p1b" color="error/600">{$t("logoutButton")}</Text>
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