export type PlaceType = 'Accommodation' | 'Restaurant' | 'Cafe';

export type Place = {
  id: string;
  name: string;
  type: PlaceType;
  address?: string;
  lat?: number;
  lng?: number;
  google_rating?: number;
  google_reviews_snippet?: string;
  google_place_url?: string;
  website?: string;
  directions?: string;
  images?: string[];
};

