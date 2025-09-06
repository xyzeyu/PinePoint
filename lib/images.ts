// Image assets mapping for places
// This integrates with Google Photos API for dynamic image loading

import { fetchGooglePhotosAlbum, findPhotoForPlace } from './googlePhotos';

// Cache for Google Photos URLs
let googlePhotosCache: Record<string, string> = {};
let photosLoaded = false;

// Initialize Google Photos on app start
export async function initializeGooglePhotos(): Promise<void> {
  try {
    console.log('Initializing Google Photos integration...');
    const photos = await fetchGooglePhotosAlbum();
    
    // Pre-populate cache with all place photos
    const placeIds = [
      // Cafes
      'kapetirya', 'hotcat-specialty-coffee', 'taza-by-kayu', 'common-ground',
      'marauders-brew-cafe', 'hatch-coffee', 'flower-cafe', 'hygge-library-cafe',
      'peakcup-coffee', 'ginto-cafe', 'scout-burrows', 'il-ilengan-cafe',
      'guesthaven-coffee', 'rebel-bakehouse', 'sweet-stop', 'brew-alchemy',
      // Accommodations
      'cozynest-rentals', 'metro-pines-inn', 'kamiseta-hotel', 'whitehouse-lord-scents',
      'secret-cabin', '1896-bb', 'atenara-house',
      // Restaurants
      'ozark-diner-bnb', 'qilla-restaurant', 'ili-likha-artists-village',
      'chaya-restaurant', 'farmers-daughter-restaurant', 'oh-my-gulay',
      'hill-station', 'canto-bogchi-joint'
    ];
    
    for (const placeId of placeIds) {
      const photoUrl = findPhotoForPlace(placeId, photos);
      if (photoUrl) {
        googlePhotosCache[placeId] = photoUrl;
      }
    }
    
    photosLoaded = true;
    console.log(`Google Photos initialized with ${Object.keys(googlePhotosCache).length} photos`);
  } catch (error) {
    console.error('Failed to initialize Google Photos:', error);
    photosLoaded = true; // Set to true to prevent infinite loading
  }
}

export function getPlaceImageSource(placeId: string): { uri: string } {
  // First priority: Google Photos cache
  if (googlePhotosCache[placeId]) {
    console.log(`Using Google Photos image for ${placeId}`);
    return { uri: googlePhotosCache[placeId] };
  }
  
  // Fallback to Unsplash with the photo mapping
  const photoMap: Record<string, string> = {
    // Cafes
    'kapetirya': '1554118811-1e0d58224f24',
    'hotcat-specialty-coffee': '1501339847302-ac426a4a7cbb',
    'taza-by-kayu': '1559056199-641a0ac8b55e',
    'studio-cafe': '1521017432531-fbd92d768814',
    'common-ground': '1442512595331-e89e73853f31',
    'peakcup-coffee': '1495474472287-4d71bcdd2085',
    'ginto-cafe': '1447933601403-0c6688de566e',
    'scout-burrows': '1509042239860-f550ce710b93',
    'il-ilengan-cafe': '1506905925346-21bda4d32df4',
    'arcas-yard': '1501339847302-ac426a4a7cbb',
    'marauders-brew-cafe': '1554118811-1e0d58224f24',
    'rockyard-cafe': '1559056199-641a0ac8b55e',
    'hatch-coffee': '1521017432531-fbd92d768814',
    'sweet-stop': '1442512595331-e89e73853f31',
    'flower-cafe': '1495474472287-4d71bcdd2085',
    'brew-alchemy': '1447933601403-0c6688de566e',
    'hygge-library-cafe': '1509042239860-f550ce710b93',
    'guesthaven-coffee': '1506905925346-21bda4d32df4',
    'rebel-bakehouse': '1501339847302-ac426a4a7cbb',
    // Accommodations
    'kamiseta-hotel': '1566073112-1c3b4c71c1c8',
    'secret-cabin': '1520250497591-112f2f40a3f4',
    'cozynest-rentals': '1571896349842-33c89424de2d',
    'metro-pines-inn': '1564501049229-cc18ee5aef86',
    'whitehouse-lord-scents': '1582719478250-c89cae4dc85b',
    'atenara-house': '1520637736862-4d197d17c93a',
    '1896-bb': '1586023492675-c216d39128aa',
    // Restaurants
    'ozark-diner-bnb': '1414728735-6f71dcaae5bd',
    'qilla-restaurant': '1565299507-6678700f2ef2',
    'ili-likha-artists-village': '1504674900-24d2d516e702',
    'chaya-restaurant': '1579871734-a35c0844ec25',
    'farmers-daughter-restaurant': '1504674900-24d2d516e702',
    'oh-my-gulay': '1504674900-24d2d516e702',
    'hill-station': '1414728735-6f71dcaae5bd',
    'canto-bogchi-joint': '1565299507-6678700f2ef2',
  };

  const photoId = photoMap[placeId] || '1554118811-1e0d58224f24';
  console.log(`Using Unsplash fallback image for ${placeId}`);
  return { uri: `https://images.unsplash.com/photo-${photoId}?w=400&h=300&fit=crop` };
}

export function hasGooglePhotosImage(placeId: string): boolean {
  return !!googlePhotosCache[placeId];
}

export function isGooglePhotosLoaded(): boolean {
  return photosLoaded;
}

export function getGooglePhotosCache(): Record<string, string> {
  return { ...googlePhotosCache };
}

// Google Photos Integration:
// This system fetches images from your Google Photos album and caches them
// for fast loading. Images are matched to places using filename/description matching.
//
// Benefits:
// - Dynamic image updates without app rebuilds
// - High-quality images from your Google Photos
// - Automatic caching for performance
// - Fallback to Unsplash if Google Photos fails
//
// How it works:
// 1. App fetches photos from your Google Photos album on startup
// 2. Photos are matched to places using search terms
// 3. URLs are cached for fast subsequent loads
// 4. If no Google Photos match, falls back to Unsplash