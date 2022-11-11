import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import theme from "./src/styles/theme";
import * as SplashScreen from "expo-splash-screen";
import { Provider as PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PageProvider } from "./src/hooks/pageContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{ flex: 1, position: "relative" }}
      onLayout={onLayoutRootView}
    >
      <GestureHandlerRootView style={{ flex: 1, position: "relative" }}>
        <ThemeProvider theme={theme}>
          <PaperProvider theme={theme}>
            <PageProvider>
              <Routes />
            </PageProvider>
          </PaperProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
