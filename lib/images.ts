// Direct Firebase Storage URLs for places
const firebaseImageUrls: Record<string, string> = {
  // Cafes
  'kapetirya': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FKapetirya.jpg?alt=media',
  'hotcat-specialty-coffee': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FHotcat%20Specialty%20Coffee.jpg?alt=media',
  'taza-by-kayu': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2Ftaza%20by%20kayu.jpg?alt=media',
  'common-ground': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FCommon%20Ground.jpg?alt=media',
  'marauders-brew-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FMarauder\'s%20brew%20cafe.jpg?alt=media',
  'hatch-coffee': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2Fhatch%20cofeee.jpg?alt=media',
  'flower-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2Fthe%20flower%20cafe.jpg?alt=media',
  'hygge-library-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FHygge%20Library%20Cafe.jpg?alt=media',
  'peakcup-coffee': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FPeakcup.jpg?alt=media',
  'ginto-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FGinto.jpg?alt=media',
  'scout-burrows': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FScout%20Burrows.jpg?alt=media',
  'il-ilengan-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FIl-ilengan.jpg?alt=media',
  'guesthaven-coffee': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FGuest%20Haven.jpg?alt=media',
  'rebel-bakehouse': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FRebel.jpg?alt=media',
  'sweet-stop': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FSweet%20stop.jpg?alt=media',
  'brew-alchemy': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FBrew%20and%20Alchemy.jpg?alt=media',
  'rockyard-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FRockyard%20Cafe.jpg?alt=media',
  
  // Accommodations
  'cozynest-rentals': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FCozyRest%20Condotel.jpg?alt=media',
  'metro-pines-inn': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FMetro%20Pines%20Inn.jpg?alt=media',
  'kamiseta-hotel': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FKamiseta%20Hotel.jpg?alt=media',
  'whitehouse-lord-scents': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FWhitehouse%20of%20the%20Lord%20of%20Scents.jpg?alt=media',
  'secret-cabin': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FScout%20Burrows.jpg?alt=media',
  '1896-bb': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2F1896%20Bed%20%26%20Breakfast.jpg?alt=media',
  'atenara-house': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FAtenara%20House.jpg?alt=media',
  
  // Restaurants
  'ozark-diner-bnb': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FOzark%20Diner.jpg?alt=media',
  'qilla-restaurant': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FQilla.jpg?alt=media',
  'ili-likha-artists-village': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2Fili-likha.jpg?alt=media',
  'chaya-restaurant': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FChaya.jpg?alt=media',
  'farmers-daughter-restaurant': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FFarmer\'s%20Daughter.jpg?alt=media',
  'oh-my-gulay': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FOh%20My%20Gulay.jpg?alt=media',
  'hill-station': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FHill%20Station.jpg?alt=media',
  'canto-bogchi-joint': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2Fcanto.jpg?alt=media',
  'mamas-table': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/PinePoint%2FMama\'s%20table.jpg?alt=media',
};

// Fallback image for places without Firebase Storage images
const fallbackImage = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop';

export async function getPlaceImageSource(placeId: string): Promise<{ uri: string }> {
  // Check if we have a direct Firebase URL for this place
  if (firebaseImageUrls[placeId]) {
    console.log(`Using Firebase image for ${placeId}`);
    return { uri: firebaseImageUrls[placeId] };
  }
  
  // If placeId is already a URL (from images array), use it directly
  if (placeId.startsWith('https://')) {
    console.log(`Using direct URL for image: ${placeId}`);
    return { uri: placeId };
  }
  
  // Fallback to default image
  console.log(`Using fallback image for ${placeId}`);
  return { uri: fallbackImage };
}

// Synchronous version for immediate use
export function getPlaceImageSourceSync(placeId: string): { uri: string } {
  // Check if we have a direct Firebase URL for this place
  if (firebaseImageUrls[placeId]) {
    return { uri: firebaseImageUrls[placeId] };
  }
  
  // If placeId is already a URL (from images array), use it directly
  if (placeId.startsWith('https://')) {
    return { uri: placeId };
  }
  
  return { uri: fallbackImage };
}

// Initialize Firebase Storage images (now just logs since we use direct URLs)
export async function initializeFirebaseImages(): Promise<void> {
  console.log('Firebase Storage images ready - using direct URLs');
}

// Compatibility functions
export function hasFirebaseImage(placeId: string): boolean {
  return !!firebaseImageUrls[placeId] || placeId.startsWith('https://');
}

export function isFirebaseLoaded(): boolean {
  return true; // Always loaded since we use direct URLs
}

export function getFirebaseImageUrls(): Record<string, string> {
  return { ...firebaseImageUrls };
}

// Firebase Storage Integration:
// This system uses direct Firebase Storage URLs to serve your actual place photos
// with fallback mechanisms for missing images.
//
// Benefits:
// - Uses your actual photos from Firebase Storage
// - Direct URLs for better performance (no SDK calls needed)
// - Fallback system for missing images
// - Secure and reliable Firebase CDN
//
// How it works:
// 1. Direct Firebase Storage URLs are mapped to place IDs
// 2. Images from place.images array are used directly if they're URLs
// 3. Fallback to default image if no Firebase image is available
// 4. Immediate loading since no async Firebase SDK calls are needed