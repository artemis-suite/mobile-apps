import React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { ThemeProvider, theme } from "@artemis-mobile/elements";

import { RootStackScreen } from "./navigation";
import { ReduxStoreProvider } from "./store";

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

export default function App() {
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
