import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider, theme } from "@artemis-mobile/elements";

import { RootStackScreen } from "./navigation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
}
