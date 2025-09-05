import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, router, Stack } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { PlaceType } from '@/types';
import { getPlacesByType } from '@/lib/data';
import PlaceCard from '@/components/PlaceCard';
import { useTheme } from '@/contexts/ThemeContext';

export default function ListScreen() {
  const { colors } = useTheme();
  const { type } = useLocalSearchParams<{ type: string }>();
  const placeType = type as PlaceType;
  
  const places = getPlacesByType(placeType);

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
        <Text style={[styles.title, { color: colors.text }]}>{placeType}s in Baguio</Text>
        <View style={styles.placeholder} />
      </View>



      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceCard place={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row' as const,
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
    fontWeight: '600' as const,
    flex: 1,
    textAlign: 'center' as const,
  },
  placeholder: {
    width: 44,
  },

  listContainer: {
    paddingVertical: 8,
  },
});