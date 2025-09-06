// Image assets mapping for places
// Direct image URLs for reliable loading

// High-quality Unsplash images mapped to each place
const placeImageUrls: Record<string, string> = {
  // Cafes
  'kapetirya': 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
  'hotcat-specialty-coffee': 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
  'taza-by-kayu': 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
  'common-ground': 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop',
  'marauders-brew-cafe': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
  'hatch-coffee': 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop',
  'flower-cafe': 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop',
  'hygge-library-cafe': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
  'peakcup-coffee': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  'ginto-cafe': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  'scout-burrows': 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop',
  'il-ilengan-cafe': 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&h=300&fit=crop',
  'guesthaven-coffee': 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=300&fit=crop',
  'rebel-bakehouse': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
  'sweet-stop': 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop',
  'brew-alchemy': 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=400&h=300&fit=crop',
  
  // Accommodations
  'cozynest-rentals': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
  'metro-pines-inn': 'https://images.unsplash.com/photo-1564501049229-cc18ee5aef86?w=400&h=300&fit=crop',
  'kamiseta-hotel': 'https://images.unsplash.com/photo-1566073112-1c3b4c71c1c8?w=400&h=300&fit=crop',
  'whitehouse-lord-scents': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
  'secret-cabin-baguio': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
  '1896-bb': 'https://images.unsplash.com/photo-1586023492675-c216d39128aa?w=400&h=300&fit=crop',
  'atenara-house': 'https://images.unsplash.com/photo-1520637736862-4d197d17c93a?w=400&h=300&fit=crop',
  
  // Restaurants
  'ozark-diner-bnb': 'https://images.unsplash.com/photo-1414728735-6f71dcaae5bd?w=400&h=300&fit=crop',
  'qilla-restaurant': 'https://images.unsplash.com/photo-1565299507-6678700f2ef2?w=400&h=300&fit=crop',
  'ili-likha-artists-village': 'https://images.unsplash.com/photo-1504674900-24d2d516e702?w=400&h=300&fit=crop',
  'chaya-restaurant': 'https://images.unsplash.com/photo-1579871734-a35c0844ec25?w=400&h=300&fit=crop',
  'farmers-daughter-restaurant': 'https://images.unsplash.com/photo-1504674900-24d2d516e702?w=400&h=300&fit=crop',
  'oh-my-gulay': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
  'hill-station': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
  'canto-bogchi-joint': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
};

// Fallback Unsplash images for places without direct URLs
const unsplashFallbacks: Record<string, string> = {
  'studio-cafe': '1521017432531-fbd92d768814',
  'arcas-yard': '1501339847302-ac426a4a7cbb',
  'rockyard-cafe': '1559056199-641a0ac8b55e',
  'cafe-by-ruins-dua': '1442512595331-e89e73853f31',
  'mamas-table': '1504674900-24d2d516e702',
  'arcas-yard-restaurant': '1414728735-6f71dcaae5bd',
};

export function getPlaceImageSource(placeId: string): { uri: string } {
  // First priority: Direct image URLs
  if (placeImageUrls[placeId]) {
    console.log(`Using direct image URL for ${placeId}`);
    return { uri: placeImageUrls[placeId] };
  }
  
  // Second priority: Unsplash fallback
  if (unsplashFallbacks[placeId]) {
    const photoId = unsplashFallbacks[placeId];
    console.log(`Using Unsplash fallback image for ${placeId}`);
    return { uri: `https://images.unsplash.com/photo-${photoId}?w=400&h=300&fit=crop` };
  }
  
  // Default fallback
  console.log(`Using default fallback image for ${placeId}`);
  return { uri: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop' };
}

// Initialize function for compatibility (no longer needed but kept for existing code)
export async function initializeGooglePhotos(): Promise<void> {
  console.log('Image system initialized with direct URLs');
}

// Compatibility functions
export function hasGooglePhotosImage(placeId: string): boolean {
  return !!placeImageUrls[placeId];
}

export function isGooglePhotosLoaded(): boolean {
  return true; // Always loaded since we use direct URLs
}

export function getGooglePhotosCache(): Record<string, string> {
  return { ...placeImageUrls };
}

// Direct Image URLs Integration:
// This system uses high-quality Unsplash images for reliable loading
// without requiring API authentication or complex caching.
//
// Benefits:
// - Instant loading without API calls
// - No authentication required
// - Reliable image availability from Unsplash CDN
// - Consistent image quality and sizing
//
// How it works:
// 1. Curated Unsplash URLs are mapped to place IDs
// 2. Images load immediately with proper sizing parameters
// 3. Fallback system for unmapped places