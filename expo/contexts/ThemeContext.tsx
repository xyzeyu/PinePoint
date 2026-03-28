import { useState, useEffect, useMemo, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  text: string;
  textSecondary: string;
  border: string;
  cardBackground: string;
  buttonBackground: string;
  buttonText: string;
  modalBackground: string;
}

const lightColors: ThemeColors = {
  background: '#ffffff',
  surface: '#f8f9fa',
  primary: '#6366f1',
  text: '#1f2937',
  textSecondary: '#6b7280',
  border: '#e5e7eb',
  cardBackground: '#ffffff',
  buttonBackground: '#f3f4f6',
  buttonText: '#374151',
  modalBackground: '#ffffff',
};

const darkColors: ThemeColors = {
  background: '#111827',
  surface: '#1f2937',
  primary: '#818cf8',
  text: '#f9fafb',
  textSecondary: '#9ca3af',
  border: '#374151',
  cardBackground: '#1f2937',
  buttonBackground: '#374151',
  buttonText: '#d1d5db',
  modalBackground: '#1f2937',
};

export const [ThemeProvider, useTheme] = createContextHook(() => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>('system');
  const [isLoading, setIsLoading] = useState(true);

  const isDark = theme === 'dark' || (theme === 'system' && systemColorScheme === 'dark');
  const colors = isDark ? darkColors : lightColors;

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
        setTheme(savedTheme as Theme);
      }
    } catch (error) {
      console.log('Error loading theme:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTheme = async (newTheme: Theme) => {
    try {
      setTheme(newTheme);
      await AsyncStorage.setItem('theme', newTheme);
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  const memoizedUpdateTheme = useCallback(updateTheme, []);

  return useMemo(() => ({
    theme,
    colors,
    isDark,
    isLoading,
    setTheme: memoizedUpdateTheme,
  }), [theme, colors, isDark, isLoading, memoizedUpdateTheme]);
});