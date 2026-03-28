import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function TermsScreen() {
  const { colors } = useTheme();

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <TouchableOpacity 
          style={[styles.backButton, { backgroundColor: colors.buttonBackground }]} 
          onPress={handleBack}
          testID="back-button"
        >
          <ArrowLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Terms & Conditions</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>1. Acceptance of Terms</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            By using PinePoint, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our application.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>2. Description of Service</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            PinePoint is a mobile application that helps users discover restaurants, cafes, and accommodations in Baguio City. We provide information about locations, directions, and contact details.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>3. User Responsibilities</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            Users are responsible for:
            • Using the app in accordance with applicable laws
            • Respecting the privacy and rights of others
            • Not attempting to harm or disrupt the service
            • Providing accurate information when required
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>4. Information Accuracy</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy, completeness, or reliability of all content. Users should verify information independently.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>5. Third-Party Services</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            Our app may link to third-party services such as Google Maps and external websites. We are not responsible for the content or practices of these third-party services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>6. Limitation of Liability</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            PinePoint and its developers shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the application.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>7. Changes to Terms</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            We reserve the right to modify these terms at any time. Users will be notified of significant changes through the application.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>8. Contact Information</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            For questions about these Terms and Conditions, please contact us through the application&apos;s feedback feature.
          </Text>
        </View>

        <View style={styles.lastSection}>
          <Text style={[styles.lastUpdated, { color: colors.textSecondary }]}>
            Last updated: September 2025
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 44,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '600',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: 'System',
    lineHeight: 24,
  },
  lastSection: {
    marginTop: 32,
    marginBottom: 32,
    alignItems: 'center',
  },
  lastUpdated: {
    fontSize: 14,
    fontFamily: 'System',
    fontStyle: 'italic',
  },
});