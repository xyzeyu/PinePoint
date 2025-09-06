// Image assets mapping for places
// This maps place IDs to their corresponding local image assets

const placeImages: Record<string, any> = {
  // Cafes
  'kapetirya': require('@/assets/places/kapetirya.jpg'),
  'hotcat-specialty-coffee': require('@/assets/places/hotcat-specialty-coffee.jpg'),
  'taza-by-kayu': require('@/assets/places/taza-by-kayu.jpg'),
  'common-ground': require('@/assets/places/common-ground.jpg'),
  'marauders-brew-cafe': require('@/assets/places/marauders-brew-cafe.jpg'),
  'hatch-coffee': require('@/assets/places/hatch-coffee.jpg'),
  'flower-cafe': require('@/assets/places/flower-cafe.jpg'),
  'hygge-library-cafe': require('@/assets/places/hygge-library-cafe.jpg'),
  'peakcup-coffee': require('@/assets/places/peakcup-coffee.jpg'),
  'ginto-cafe': require('@/assets/places/ginto-cafe.jpg'),
  'scout-burrows': require('@/assets/places/scout-burrows.jpg'),
  'il-ilengan-cafe': require('@/assets/places/il-ilengan-cafe.jpg'),
  'guesthaven-coffee': require('@/assets/places/guesthaven-coffee.jpg'),
  'rebel-bakehouse': require('@/assets/places/rebel-bakehouse.jpg'),
  'sweet-stop': require('@/assets/places/sweet-stop.jpg'),
  'brew-alchemy': require('@/assets/places/brew-alchemy.jpg'),
  
  // Accommodations
  'cozynest-rentals': require('@/assets/places/cozynest-rentals.jpg'),
  'metro-pines-inn': require('@/assets/places/metro-pines-inn.jpg'),
  'kamiseta-hotel': require('@/assets/places/kamiseta-hotel.jpg'),
  'whitehouse-lord-scents': require('@/assets/places/whitehouse-lord-scents.jpg'),
  'secret-cabin': require('@/assets/places/secret-cabin.jpg'),
  '1896-bb': require('@/assets/places/1896-bb.jpg'),
  'atenara-house': require('@/assets/places/atenara-house.jpg'),
  
  // Restaurants
  'ozark-diner-bnb': require('@/assets/places/ozark-diner-bnb.jpg'),
  'qilla-restaurant': require('@/assets/places/qilla-restaurant.jpg'),
  'ili-likha-artists-village': require('@/assets/places/ili-likha-artists-village.jpg'),
  'chaya-restaurant': require('@/assets/places/chaya-restaurant.jpg'),
  'farmers-daughter-restaurant': require('@/assets/places/farmers-daughter-restaurant.jpg'),
  'oh-my-gulay': require('@/assets/places/oh-my-gulay.jpg'),
  'hill-station': require('@/assets/places/hill-station.jpg'),
  'canto-bogchi-joint': require('@/assets/places/canto-bogchi-joint.jpg'),
};

export function getPlaceImageSource(placeId: string): { uri: string } | number {
  // Check if we have a local asset for this place
  if (placeImages[placeId]) {
    return placeImages[placeId];
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
  return { uri: `https://images.unsplash.com/photo-${photoId}?w=400&h=300&fit=crop` };
}

export function hasLocalImage(placeId: string): boolean {
  return !!placeImages[placeId];
}

// Instructions for adding local images:
// 1. Create assets/places/ folder in your project root
// 2. Add your image files (JPG, PNG, WebP formats supported)
// 3. Name them exactly as shown above (e.g., kapetirya.jpg, hotcat-specialty-coffee.jpg)
// 4. The images will be bundled with your app and load instantly
//
// Benefits of local images:
// - Always available offline
// - Instant loading (no network requests)
// - Better user experience
// - Smaller app bundle than you might think (images are optimized)
//
// To add new images:
// 1. Add the image file to assets/places/
// 2. Add a require() statement above
// 3. The app will automatically use the local image