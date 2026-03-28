import { Linking, Alert } from 'react-native';
import mapsData from '@/data/maps.json';

interface DirectionsParams {
  lat?: number;
  lng?: number;
  name?: string;
}

export async function openDirections({ lat, lng, name }: DirectionsParams): Promise<void> {
  if (!lat || !lng) {
    Alert.alert('Error', 'Location coordinates not available');
    return;
  }

  // Use current location as starting point for directions
  const googleMapsAppUrl = `comgooglemaps://?saddr=Current+Location&daddr=${lat},${lng}&directionsmode=driving`;
  const googleMapsWebUrl = `https://www.google.com/maps/dir/Current+Location/${lat},${lng}/@${lat},${lng},15z/data=!3m1!4b1!4m2!4m1!3e0`;

  try {
    const canOpenApp = await Linking.canOpenURL('comgooglemaps://');
    
    if (canOpenApp) {
      await Linking.openURL(googleMapsAppUrl);
    } else {
      await Linking.openURL(googleMapsWebUrl);
    }
  } catch (error) {
    console.error('Error opening maps:', error);
    Alert.alert('Error', 'Could not open maps application');
  }
}

export async function openExternalUrl(url: string): Promise<void> {
  if (!url) {
    Alert.alert('Error', 'URL not available');
    return;
  }

  try {
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Could not open URL');
    }
  } catch (error) {
    console.error('Error opening URL:', error);
    Alert.alert('Error', 'Could not open URL');
  }
}

export function getGoogleMapsUrl(placeId: string): string | null {
  const mapData = mapsData.find(item => item.id === placeId);
  return mapData?.google_maps_url || null;
}

export async function openGoogleMapsUrl(placeId: string): Promise<void> {
  const url = getGoogleMapsUrl(placeId);
  if (url) {
    await openExternalUrl(url);
  } else {
    Alert.alert('Error', 'Google Maps URL not available for this place');
  }
}