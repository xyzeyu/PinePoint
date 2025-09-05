import { Place, PlaceType } from '@/types';
import placesDataRaw from '@/data/places.json';

// Type assertion to ensure the JSON data matches our Place type
const placesData = placesDataRaw as Place[];

export function getPlacesByType(type: PlaceType): Place[] {
  return placesData.filter((place) => place.type === type);
}

export function getAllPlaces(): Place[] {
  return placesData;
}