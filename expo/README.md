# PinePoint - Baguio City Discovery App

A beautiful React Native mobile app for discovering accommodations, restaurants, and cafés in Baguio City, Philippines.

## Features

- **Clean, minimal UI** with intuitive navigation
- **Three main categories**: Restaurants, Cafes, and Accommodations
- **Google Maps integration** for directions (native app preferred, web fallback)
- **Special "Underrated Cafes" section** with curated local favorites
- **External links** to Google Reviews and official websites
- **Cross-platform** support (iOS, Android, Web)

## Tech Stack

- **React Native** with Expo SDK 53
- **TypeScript** for type safety
- **Expo Router** for file-based navigation
- **React Query** for state management
- **Lucide React Native** for icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Use the Expo Go app to scan the QR code, or press `i` for iOS simulator / `a` for Android emulator.

## Project Structure

```
app/
├── _layout.tsx          # Root layout with navigation
├── index.tsx            # Home screen with category buttons
├── list/[type].tsx      # Dynamic list screen for each category
└── cafes/underrated.tsx # Special underrated cafes screen

components/
├── PlaceCard.tsx        # Reusable place card component
└── UnderratedCafeCard.tsx # Card for underrated cafes

lib/
├── data.ts              # Data access functions
└── maps.ts              # Google Maps integration helpers

data/
├── places.json          # Main places data
└── underrated_cafes.json # Curated underrated cafes

types/
└── index.ts             # TypeScript type definitions
```

## Data Structure

### Place Type
```typescript
type Place = {
  id: string;
  name: string;
  type: 'Accommodation' | 'Restaurant' | 'Cafe';
  address?: string;
  lat?: number;
  lng?: number;
  google_rating?: number;
  google_reviews_snippet?: string;
  google_place_url?: string;
  website?: string;
};
```

### Underrated Cafe Type
```typescript
type UnderratedCafe = {
  id: string;
  name: string;
  photo?: string;
  description_url?: string;
  maps_url?: string;
  directions?: string;
};
```

## Features in Detail

### Google Maps Integration
- Attempts to open native Google Maps app first
- Falls back to web version if app not available
- Provides turn-by-turn directions to exact coordinates

### External Links
- Google Reviews: Opens official Google place pages
- Websites: Opens official business websites
- All external links open in default browser

### Underrated Cafes
- Curated list of local favorites
- High-quality photos from Unsplash
- Step-by-step directions from common landmarks
- Ready for real data integration

## Customization

### Adding New Places
1. Edit `data/places.json` to add new restaurants, cafes, or accommodations
2. Include coordinates for Google Maps integration
3. Add Google place URLs and official websites when available

### Adding Underrated Cafes
1. Edit `data/underrated_cafes.json`
2. Include high-quality photos (currently using Unsplash placeholders)
3. Add detailed directions from known landmarks

### Styling
- Colors and styles are defined in component StyleSheet objects
- Main brand color: `#2563EB` (blue)
- Consistent spacing and typography throughout
- Accessible touch targets (44px minimum)

## Future Enhancements

- [ ] Real-time data from Google Places API
- [ ] User reviews and ratings
- [ ] Favorites functionality
- [ ] Search and filtering
- [ ] Location-based sorting
- [ ] Offline caching
- [ ] Push notifications for new places

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT License - see LICENSE file for details