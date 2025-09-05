import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { router } from 'expo-router';
import { ChefHat, Coffee, Hotel, Sun, Moon, Smartphone } from 'lucide-react-native';
import { useTheme, Theme } from '@/contexts/ThemeContext';

export default function HomeScreen() {
  const { colors, theme, setTheme, isDark } = useTheme();
  
  const navigateToList = (type: string) => {
    router.push(`/list/${type}`);
  };
  
  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };
  
  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun size={20} color={colors.text} />;
      case 'dark': return <Moon size={20} color={colors.text} />;
      case 'system': return <Smartphone size={20} color={colors.text} />;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Image 
                source={{ uri: 'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2okr7pqs12i9rarzqm2ul' }}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={[styles.brandText, { color: colors.text }]}>PINEPOINT</Text>
          </View>
          <Text style={[styles.title, { color: colors.text }]}>Welcome</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>What are you looking for?</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[
              styles.categoryButton, 
              isDark ? { backgroundColor: colors.surface, borderColor: colors.border } : styles.restaurantButton
            ]}
            onPress={() => navigateToList('Restaurant')}
            testID="restaurants-button"
          >
            <ChefHat size={32} color={colors.primary} />
            <Text style={[styles.buttonText, { color: colors.text }]}>Restaurant</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.categoryButton, 
              isDark ? { backgroundColor: colors.surface, borderColor: colors.border } : styles.cafeButton
            ]}
            onPress={() => navigateToList('Cafe')}
            testID="cafes-button"
          >
            <Coffee size={32} color={colors.primary} />
            <Text style={[styles.buttonText, { color: colors.text }]}>Cafes</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.categoryButton, 
              isDark ? { backgroundColor: colors.surface, borderColor: colors.border } : styles.accommodationButton
            ]}
            onPress={() => navigateToList('Accommodation')}
            testID="accommodations-button"
          >
            <Hotel size={32} color={colors.primary} />
            <Text style={[styles.buttonText, { color: colors.text }]}>Accommodation</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.textSecondary }]}>Discover the best of Baguio City</Text>
          <View style={styles.legalLinks}>
            <TouchableOpacity onPress={() => router.push('/terms')}>
              <Text style={[styles.legalLink, { color: colors.primary }]}>Terms & Conditions</Text>
            </TouchableOpacity>
            <Text style={[styles.separator, { color: colors.textSecondary }]}> • </Text>
            <TouchableOpacity onPress={() => router.push('/privacy')}>
              <Text style={[styles.legalLink, { color: colors.primary }]}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={[styles.themeButton, { backgroundColor: colors.buttonBackground, marginTop: 16 }]} 
            onPress={cycleTheme}
            testID="theme-toggle"
          >
            {getThemeIcon()}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  brandText: {
    fontSize: 54,
    fontFamily: 'System',
    fontWeight: 'bold' as const,
    letterSpacing: 1.5,
  },
  themeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'System',
    fontWeight: 'bold' as const,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'System',
    textAlign: 'center' as const,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  categoryButton: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'flex-start' as const,
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 72,
  },
  restaurantButton: {
    backgroundColor: '#f5f1e8',
  },
  cafeButton: {
    backgroundColor: '#e8e4f3',
  },
  accommodationButton: {
    backgroundColor: '#e8f5e8',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600' as const,
    marginLeft: 16,
  },
  footer: {
    marginTop: 48,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'System',
    textAlign: 'center' as const,
    marginBottom: 12,
  },
  legalLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  legalLink: {
    fontSize: 14,
    fontFamily: 'System',
    textDecorationLine: 'underline',
  },
  separator: {
    fontSize: 14,
    fontFamily: 'System',
  },
});