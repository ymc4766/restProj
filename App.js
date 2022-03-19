import React from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { StatusBar, Text, View } from "react-native";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/features/infrastructure/theme";

// import { SafeArea } from "./src/Utils/safeArea";
import { RestaurantsContextProvider } from "./src/Service/res-context";
import { LocationContextProvider } from "./src/Service/Location/location-context";
import { Index } from "./src/Navigation";

export default function App() {
  const [OswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Index />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({

// });
