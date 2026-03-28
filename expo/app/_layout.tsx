import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "@/contexts/ThemeContext";


SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="list/[type]" />
      <Stack.Screen name="terms" />
      <Stack.Screen name="privacy" />
    </Stack>
  );
}

export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen after app is ready
    SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootLayoutNav />
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}