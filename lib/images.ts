// Direct Firebase Storage URLs for places with access tokens
const firebaseImageUrls: Record<string, string> = {
  // Cafes
  'kapetirya': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FKapetirya.jpg?alt=media&token=f2146798-66ea-4dfd-93e2-4150bb8a249d',
  'hotcat-specialty-coffee': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FHotcat%20Specialty%20Coffee.jpg?alt=media&token=826bb46a-7ce7-4153-af55-a05e8bcf577a',
  'taza-by-kayu': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2Ftaza%20by%20kayu.jpg?alt=media&token=9bc2406b-de3b-4b70-9d35-71cbd488838b',
  'common-ground': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FCommon%20Ground.jpg?alt=media&token=7dd3fdb2-c0e8-4e69-b66e-d7587ecce277',
  'marauders-brew-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FMarauder\'s%20brew%20cafe.jpg?alt=media&token=de437232-6065-40d4-9135-79d3f4c353d1',
  'hatch-coffee': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2Fhatch%20cofeee.jpg?alt=media&token=3ae391e6-1473-4ba3-9cf4-af79a1f798c7',
  'flower-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2Fthe%20flower%20cafe.jpg?alt=media&token=c33d06e6-4a87-400e-99f8-7083362887da',
  'hygge-library-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FHygge%20Library%20Cafe.jpg?alt=media&token=497f0108-eb72-4d00-846e-450ec93debe9',
  'peakcup-coffee': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FPeakcup.jpg?alt=media&token=047ff1b7-d801-495e-a4ba-0d69e8849651',
  'ginto-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FGinto.jpg?alt=media&token=50f0794b-1010-406e-829a-583ab6beceae',
  'scout-burrows': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FScout%20Burrows.jpg?alt=media&token=909b7646-241d-41db-94bf-dc6d2763deb7',
  'il-ilengan-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FIl-ilengan.jpg?alt=media&token=190bad07-37b4-4edc-9059-c12b0b8ff903',
  'guesthaven-coffee': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FGuest%20Haven.jpg?alt=media&token=db45ce40-c0b5-418a-b9ee-21b07833fcb9',
  'rebel-bakehouse': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FRebel.jpg?alt=media&token=f7cad3c7-3983-4fe9-9409-d4bd20cd46c3',
  'sweet-stop': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FSweet%20stop.jpg?alt=media&token=92c904b3-da6c-4059-a2f5-afe85c8dcd9a',
  'brew-alchemy': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FBrew%20and%20Alchemy.jpg?alt=media&token=ed7638be-5de1-4845-ac2b-bebce0052954',
  'rockyard-cafe': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FRockyard%20Cafe.jpg?alt=media&token=52d7d228-2951-41f2-acec-05ddd691db97',
  
  // Accommodations
  'cozynest-rentals': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FCozyRest%20Condotel.jpg?alt=media&token=e6ca60fa-6a99-4c10-80f4-2ce2d88b2d9d',
  'metro-pines-inn': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FMetro%20Pines%20Inn.jpg?alt=media&token=2ee1fa4b-ee85-4340-86c5-56142f73f14a',
  'kamiseta-hotel': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FKamiseta%20Hotel.jpg?alt=media&token=d2a198e7-03c0-4006-882c-4f35913fdd1e',
  'whitehouse-lord-scents': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FWhitehouse%20of%20the%20Lord%20of%20Scents.jpg?alt=media&token=6a7c718a-2c55-451d-85ad-ab018e672643',
  'secret-cabin': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FSecret%20Cabin.jpg?alt=media&token=15777309-3456-47d0-a020-f6e6ad74c33b',
  '1896-bb': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2F1896%20Bed%20%26%20Breakfast.jpg?alt=media&token=2ff5f4b8-2b21-4151-9c4b-aff2dcd2b0dd',
  'atenara-house': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FAtenara%20House.jpg?alt=media&token=9bca5c49-6d55-4e32-9aa0-3a5091464d12',
  
  // Restaurants
  'ozark-diner-bnb': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FOzark%20Diner.jpg?alt=media&token=040e62a4-ae79-4914-b1dc-7a0d4a9575db',
  'qilla-restaurant': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FQilla.jpg?alt=media&token=96125e74-b0e9-4b2d-bc17-9c474c82c73c',
  'ili-likha-artists-village': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2Fili-likha.jpg?alt=media&token=08b5f0bc-dab1-4f2b-8924-c9d7eec842c4',
  'chaya-restaurant': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FChaya.jpg?alt=media&token=0a00bd4c-0835-4c7c-a8e5-02515eda401b',
  'farmers-daughter-restaurant': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FFarmer\'s%20Daughter.jpg?alt=media&token=0b1921f9-5f4e-44dd-ae01-3233cf009239',
  'oh-my-gulay': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FOh%20My%20Gulay.jpg?alt=media&token=04c7fc3e-fbe0-4342-b85c-cb018e8124bb',
  'hill-station': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FHill%20Station.jpg?alt=media&token=4e2de78d-116a-4699-b715-6ad57910533e',
  'canto-bogchi-joint': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2Fcanto.jpg?alt=media&token=98e6c40d-96d5-4b32-b2eb-aec781499967',
  'mamas-table': 'https://firebasestorage.googleapis.com/v0/b/pinepoint-28ca9.firebasestorage.app/o/public%2FMama\'s%20table.jpg?alt=media&token=9c571be8-717f-43ac-8108-654bc573893b',
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