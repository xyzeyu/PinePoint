// Google Photos API integration
// This service fetches images from a shared Google Photos album

const GOOGLE_PHOTOS_API_KEY = 'AIzaSyBx_cTBrVdYy97Pf0yTSnkUmm2zRhC661k';
const ALBUM_ID = 'AF1QipO9EGYdKFUiyrm6i4cz4WCg3ahMKdk0TsdeNF3q';

interface GooglePhotosMediaItem {
  id: string;
  description?: string;
  baseUrl: string;
  filename: string;
  mimeType: string;
  mediaMetadata: {
    creationTime: string;
    width: string;
    height: string;
  };
}

interface GooglePhotosResponse {
  mediaItems: GooglePhotosMediaItem[];
  nextPageToken?: string;
}

// Cache for storing fetched photos
let photoCache: GooglePhotosMediaItem[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Mapping of place names to their corresponding photo filenames or descriptions
const placePhotoMapping: Record<string, string[]> = {
  'kapetirya': ['kapetirya', 'Kapetirya'],
  'hotcat-specialty-coffee': ['hotcat', 'Hotcat Specialty Coffee'],
  'taza-by-kayu': ['taza', 'Taza by Kayu'],
  'common-ground': ['common ground', 'Common Ground'],
  'marauders-brew-cafe': ['marauder', 'Marauder\'s Brew Café'],
  'hatch-coffee': ['hatch', 'Hatch Coffee'],
  'flower-cafe': ['flower', 'The Flower Café'],
  'hygge-library-cafe': ['hygge', 'Hygge Library Café'],
  'cozynest-rentals': ['cozynest', 'CozyNest Rentals', 'brenthill'],
  'metro-pines-inn': ['metro pines', 'Metro Pines Inn'],
  'kamiseta-hotel': ['kamiseta', 'Kamiseta Hotel'],
  'whitehouse-lord-scents': ['whitehouse', 'Whitehouse of the Lord of Scents'],
  'secret-cabin': ['secret cabin', 'Secret Cabin'],
  '1896-bb': ['1896', '1896 Bed & Breakfast'],
  'atenara-house': ['atenara', 'Atenara House'],
  'ozark-diner-bnb': ['ozark', 'Ozark Diner + BnB'],
  'qilla-restaurant': ['qilla', 'Qilla Restaurant'],
  'ili-likha-artists-village': ['ili-likha', 'Ili-Likha Artists\' Village'],
  'chaya-restaurant': ['chaya', 'Chaya'],
  'farmers-daughter-restaurant': ['farmer', 'Farmer\'s Daughter Restaurant'],
  'oh-my-gulay': ['oh my gulay', 'OMG'],
  'hill-station': ['hill station', 'Hill Station'],
  'canto-bogchi-joint': ['canto', 'Canto Bogchi Joint'],
  'brew-alchemy': ['brew', 'alchemy', 'Brew & Alchemy'],
  'peakcup-coffee': ['peakcup', 'Peakcup Coffee'],
  'ginto-cafe': ['ginto', 'Ginto Café'],
  'scout-burrows': ['scout', 'burrows', 'milkyway', 'Scout Burrows', 'Little Milkyway'],
  'il-ilengan-cafe': ['il-ilengan', 'Il-Ilengan Café'],
  'guesthaven-coffee': ['guesthaven', 'Guesthaven Coffee'],
  'rebel-bakehouse': ['rebel', 'bakehouse', 'Rebel Bakehouse'],
  'sweet-stop': ['sweet stop', 'Sweet Stop'],
};

export async function fetchGooglePhotosAlbum(): Promise<GooglePhotosMediaItem[]> {
  // Check cache first
  const now = Date.now();
  if (photoCache && (now - cacheTimestamp) < CACHE_DURATION) {
    console.log('Using cached Google Photos data');
    return photoCache;
  }

  try {
    console.log('Fetching photos from Google Photos album...');
    
    // First, get the album details to ensure it's accessible
    const albumUrl = `https://photoslibrary.googleapis.com/v1/albums/${ALBUM_ID}?key=${GOOGLE_PHOTOS_API_KEY}`;
    const albumResponse = await fetch(albumUrl);
    
    if (!albumResponse.ok) {
      throw new Error(`Album fetch failed: ${albumResponse.status} ${albumResponse.statusText}`);
    }

    // Now fetch the media items from the album
    const mediaUrl = `https://photoslibrary.googleapis.com/v1/mediaItems:search?key=${GOOGLE_PHOTOS_API_KEY}`;
    const requestBody = {
      albumId: ALBUM_ID,
      pageSize: 100
    };

    const mediaResponse = await fetch(mediaUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!mediaResponse.ok) {
      throw new Error(`Media fetch failed: ${mediaResponse.status} ${mediaResponse.statusText}`);
    }

    const data: GooglePhotosResponse = await mediaResponse.json();
    const photos = data.mediaItems || [];
    
    console.log(`Fetched ${photos.length} photos from Google Photos`);
    
    // Cache the results
    photoCache = photos;
    cacheTimestamp = now;
    
    return photos;
  } catch (error) {
    console.error('Error fetching Google Photos:', error);
    // Return empty array on error, fallback images will be used
    return [];
  }
}

export function findPhotoForPlace(placeId: string, photos: GooglePhotosMediaItem[]): string | null {
  const searchTerms = placePhotoMapping[placeId] || [];
  
  if (searchTerms.length === 0) {
    console.log(`No search terms defined for place: ${placeId}`);
    return null;
  }

  // Search through photos to find a match
  for (const photo of photos) {
    const filename = photo.filename.toLowerCase();
    const description = (photo.description || '').toLowerCase();
    
    // Check if any search term matches the filename or description
    for (const term of searchTerms) {
      const searchTerm = term.toLowerCase();
      if (filename.includes(searchTerm) || description.includes(searchTerm)) {
        console.log(`Found photo for ${placeId}: ${photo.filename}`);
        // Return the base URL with size parameters for optimization
        return `${photo.baseUrl}=w400-h300-c`;
      }
    }
  }
  
  console.log(`No photo found for place: ${placeId}`);
  return null;
}

export function getOptimizedPhotoUrl(baseUrl: string, width: number = 400, height: number = 300): string {
  return `${baseUrl}=w${width}-h${height}-c`;
}

// Clear cache function for debugging
export function clearPhotoCache(): void {
  photoCache = null;
  cacheTimestamp = 0;
  console.log('Google Photos cache cleared');
}