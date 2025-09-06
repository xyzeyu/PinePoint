import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebase';

// Firebase Storage image mapping for places
const firebaseImagePaths: Record<string, string> = {
  // Cafes
  'kapetirya': 'PinePoint/Kapetirya.jpg',
  'hotcat-specialty-coffee': 'PinePoint/Hotcat Specialty Coffee.jpg',
  'taza-by-kayu': 'PinePoint/Taza by Kayu.jpg',
  'common-ground': 'PinePoint/Common Ground.jpg',
  'marauders-brew-cafe': 'PinePoint/Marauders Brew Cafe.jpg',
  'hatch-coffee': 'PinePoint/Hatch Coffee.jpg',
  'flower-cafe': 'PinePoint/The Flower Cafe.jpg',
  'hygge-library-cafe': 'PinePoint/Hygge Library Cafe.jpg',
  'peakcup-coffee': 'PinePoint/Peakcup Coffee.jpg',
  'ginto-cafe': 'PinePoint/Ginto Cafe.jpg',
  'scout-burrows': 'PinePoint/Scout Burrows Little Milkyway.jpg',
  'il-ilengan-cafe': 'PinePoint/Il-Ilengan Cafe.jpg',
  'guesthaven-coffee': 'PinePoint/Guesthaven Coffee.jpg',
  'rebel-bakehouse': 'PinePoint/Rebel Bakehouse Hatch.jpg',
  'sweet-stop': 'PinePoint/Sweet Stop.jpg',
  'brew-alchemy': 'PinePoint/Brew & Alchemy.jpg',
  
  // Accommodations
  'cozynest-rentals': 'PinePoint/CozyNest Rentals (Brenthill).jpg',
  'metro-pines-inn': 'PinePoint/Metro Pines Inn.jpg',
  'kamiseta-hotel': 'PinePoint/Kamiseta Hotel.jpg',
  'whitehouse-lord-scents': 'PinePoint/Whitehouse of the Lord of Scents.jpg',
  'secret-cabin': 'PinePoint/Secret Cabin.jpg',
  '1896-bb': 'PinePoint/1896 Bed & Breakfast.jpg',
  'atenara-house': 'PinePoint/Atenara House.jpg',
  
  // Restaurants
  'ozark-diner-bnb': 'PinePoint/Ozark Diner + BnB.jpg',
  'qilla-restaurant': 'PinePoint/Qilla Restaurant.jpg',
  'ili-likha-artists-village': 'PinePoint/Ili-Likha Artists Village.jpg',
  'chaya-restaurant': 'PinePoint/Chaya.jpg',
  'farmers-daughter-restaurant': 'PinePoint/Farmers Daughter Restaurant.jpg',
  'oh-my-gulay': 'PinePoint/Oh My Gulay (OMG).jpg',
  'hill-station': 'PinePoint/Hill Station.jpg',
  'canto-bogchi-joint': 'PinePoint/Canto Bogchi Joint.jpg',
};

// Cache for Firebase Storage URLs
const urlCache: Record<string, string> = {};

// Fallback image for places without Firebase Storage images
const fallbackImage = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop';

export async function getPlaceImageSource(placeId: string): Promise<{ uri: string }> {
  // Check cache first
  if (urlCache[placeId]) {
    console.log(`Using cached Firebase image for ${placeId}`);
    return { uri: urlCache[placeId] };
  }
  
  // Try to get Firebase Storage image
  if (firebaseImagePaths[placeId]) {
    try {
      const imageRef = ref(storage, firebaseImagePaths[placeId]);
      const downloadURL = await getDownloadURL(imageRef);
      urlCache[placeId] = downloadURL;
      console.log(`Loaded Firebase image for ${placeId}`);
      return { uri: downloadURL };
    } catch (error) {
      console.warn(`Failed to load Firebase image for ${placeId}:`, error);
    }
  }
  
  // Fallback to default image
  console.log(`Using fallback image for ${placeId}`);
  return { uri: fallbackImage };
}

// Synchronous version for immediate use (returns cached or fallback)
export function getPlaceImageSourceSync(placeId: string): { uri: string } {
  if (urlCache[placeId]) {
    return { uri: urlCache[placeId] };
  }
  return { uri: fallbackImage };
}

// Initialize Firebase Storage images
export async function initializeFirebaseImages(): Promise<void> {
  console.log('Initializing Firebase Storage images...');
  
  // Pre-load some common images
  const commonPlaces = ['kapetirya', 'hotcat-specialty-coffee', 'common-ground', 'kamiseta-hotel'];
  
  for (const placeId of commonPlaces) {
    try {
      await getPlaceImageSource(placeId);
    } catch (error) {
      console.warn(`Failed to pre-load image for ${placeId}:`, error);
    }
  }
  
  console.log('Firebase Storage images initialized');
}

// Compatibility functions
export function hasFirebaseImage(placeId: string): boolean {
  return !!firebaseImagePaths[placeId];
}

export function isFirebaseLoaded(): boolean {
  return Object.keys(urlCache).length > 0;
}

export function getFirebaseCache(): Record<string, string> {
  return { ...urlCache };
}

// Firebase Storage Integration:
// This system uses Firebase Storage to serve your actual place photos
// with proper caching and fallback mechanisms.
//
// Benefits:
// - Uses your actual photos from Firebase Storage
// - Automatic caching for better performance
// - Fallback system for missing images
// - Secure and reliable Firebase CDN
//
// How it works:
// 1. Firebase Storage paths are mapped to place IDs
// 2. Images are loaded asynchronously and cached
// 3. Fallback to default image if Firebase image fails
// 4. Pre-loading for common places to improve performance