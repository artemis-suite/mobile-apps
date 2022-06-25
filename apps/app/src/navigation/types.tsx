import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

//#region [ Root Stack ]

export type RootStackParamList = {
    Landing: undefined,
    LoginPhoneNumber: undefined,
    LoginVerification: undefined,
    Main: NavigatorScreenParams<MainTabsParamList>,
    //popups
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

//#endregion

//#region [ Main Tabs ]

export type MainTabsParamList = {
    Contacts: NavigatorScreenParams<ContactsStackParamList>,
    Reports: NavigatorScreenParams<ReportsStackParamList>,
    Notifications: undefined,
    Profile: undefined,
}

export type MainTabsScreenProps<T extends keyof MainTabsParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<MainTabsParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

//#endregion

//#region [ Contacts ]

export type ContactsStackParamList = {
    Landing: undefined,
    SearchResult: undefined,
    InfoWizard: undefined,
    Attendance: undefined
}

export type ContactsStackScreenProps<T extends keyof ContactsStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<ContactsStackParamList, T>,
        BottomTabScreenProps<MainTabsParamList>
    >

//#endregion

//#region [ Reports ]

export type ReportsStackParamList = {
    Landing: undefined,
    NeedAttention: undefined,
    BirthDays: undefined
    Missing: undefined,
    NotCalled: undefined,
}

export type ReportsStackScreenProps<T extends keyof ReportsStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<ReportsStackParamList, T>,
        BottomTabScreenProps<MainTabsParamList>
    >

//#endregion

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}