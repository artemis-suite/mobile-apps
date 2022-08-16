import React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { ThemeProvider, RTLTheme, LTRTheme } from "@artemis-mobile/elements";

import { RootStackScreen } from "./navigation";
import { ReduxStoreProvider } from "./store";
import { useLocal } from "./i18n";


export default function App() {

  const { direction } = useLocal();
  const theme = direction === "rtl" ? RTLTheme : LTRTheme;

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: theme.colors.dark,
      text: theme.colors.dark,
      card: theme.colors.background,
      background: theme.colors.background,
      primary: theme.colors['primary/500']
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <ReduxStoreProvider>
        <NavigationContainer theme={navigationTheme}>
          <RootStackScreen />
        </NavigationContainer>
      </ReduxStoreProvider>
    </ThemeProvider>
  );
}
