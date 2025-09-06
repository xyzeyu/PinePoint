import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { initializeGooglePhotos } from "@/lib/images";

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
    const initializeApp = async () => {
      try {
        // Initialize Google Photos integration
        await initializeGooglePhotos();
        console.log('Google Photos integration initialized');
      } catch (error) {
        console.error('Failed to initialize Google Photos:', error);
      } finally {
        // Hide splash screen after initialization
        SplashScreen.hideAsync();
      }
    };
    
    initializeApp();
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