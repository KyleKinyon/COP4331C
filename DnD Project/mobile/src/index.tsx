import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Main } from "./navigation/Main";

const theme = {
  ...DefaultTheme,
  dark: true,
};

export default function App() {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent("Name", () => App);
