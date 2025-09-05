import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function PrivacyScreen() {
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
        <Text style={[styles.title, { color: colors.text }]}>Privacy Policy</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>1. Information We Collect</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            PinePoint is designed to respect your privacy. We do not collect personal information unless you voluntarily provide it. The app may access your device location only when you request directions to help provide better navigation services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>2. How We Use Information</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            Any information collected is used solely to:
            • Provide location-based services and directions
            • Improve app functionality and user experience
            • Respond to user inquiries and feedback
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>3. Location Services</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            When you use our mapping features, we may access your device location to provide directions from your current location to selected destinations. This information is not stored or transmitted to our servers.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>4. Third-Party Services</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            Our app integrates with third-party services including Google Maps and external websites. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third-party services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>5. Data Storage</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            App preferences and settings may be stored locally on your device to enhance your user experience. This data remains on your device and is not transmitted to external servers.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>6. Data Security</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            We implement appropriate security measures to protect any information processed through our app. However, no method of transmission over the internet or electronic storage is 100% secure.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>7. Children&apos;s Privacy</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>8. Changes to Privacy Policy</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            We may update this Privacy Policy from time to time. We will notify users of any material changes through the application.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>9. Contact Us</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            If you have questions about this Privacy Policy, please contact us through the application feedback feature.
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