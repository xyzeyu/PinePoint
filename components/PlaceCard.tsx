import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import { Star, MapPin, ExternalLink, Globe, X, ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Place } from '@/types';
import { openExternalUrl, openGoogleMapsUrl } from '@/lib/maps';
import { useTheme } from '@/contexts/ThemeContext';

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  const { colors } = useTheme();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [flickrAttempt, setFlickrAttempt] = useState<number>(0);
  
  // Convert Flickr URLs to direct image URLs
  const convertFlickrUrlToImageUrl = (flickrUrl: string, attempt: number = 0): string => {
    try {
      // Extract photo ID from Flickr URL
      // Format: https://www.flickr.com/photos/203457212@N02/54768214881/in/dateposted-public/
      const match = flickrUrl.match(/\/photos\/[^\/]+\/(\d+)\//); 
      if (match && match[1]) {
        const photoId = match[1];
        // Try multiple Flickr direct image URL formats
        const formats = [
          `https://live.staticflickr.com/65535/${photoId}_c.jpg`, // medium size
          `https://live.staticflickr.com/65535/${photoId}_b.jpg`, // large size
          `https://live.staticflickr.com/65535/${photoId}_z.jpg`, // medium 640
          `https://live.staticflickr.com/65535/${photoId}_m.jpg`, // small 240
        ];
        return formats[attempt] || formats[0];
      }
    } catch (error) {
      console.log('Error converting Flickr URL:', error);
    }
    return flickrUrl; // Return original if conversion fails
  };
  
  const isCafe = place.type === 'Cafe';
  const isAccommodation = place.type === 'Accommodation';
  const isRestaurant = place.type === 'Restaurant';
  const hasRealImages = place.images && place.images.length > 0;
  const hasPhoto = hasRealImages || isCafe || isAccommodation || isRestaurant;
  const getPhotoUrl = () => {
    if (hasRealImages && !imageError) {
      const originalUrl = place.images![currentImageIndex];
      if (originalUrl.includes('flickr.com')) {
        return convertFlickrUrlToImageUrl(originalUrl, flickrAttempt);
      }
      return originalUrl;
    }
    return `https://images.unsplash.com/photo-${getPhotoId(place.id)}?w=400&h=300&fit=crop`;
  };
  const photoUrl = getPhotoUrl();
  const hasMultipleImages = hasRealImages && place.images!.length > 1;
  const handleOpenMaps = () => {
    openGoogleMapsUrl(place.id);
  };

  const handleOpenGoogleReviews = () => {
    if (place.google_place_url) {
      openExternalUrl(place.google_place_url);
    }
  };

  const handleOpenWebsite = () => {
    if (place.website) {
      openExternalUrl(place.website);
    }
  };

  const handleCardPress = () => {
    if ((isCafe || isAccommodation || isRestaurant) && place.directions) {
      setShowModal(true);
    }
  };

  const nextImage = () => {
    if (hasRealImages && place.images!.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % place.images!.length);
      setImageError(false);
      setImageLoaded(false);
      setFlickrAttempt(0); // Reset Flickr attempt for new image
    }
  };

  const prevImage = () => {
    if (hasRealImages && place.images!.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + place.images!.length) % place.images!.length);
      setImageError(false);
      setImageLoaded(false);
      setFlickrAttempt(0); // Reset Flickr attempt for new image
    }
  };

  const handleImageError = () => {
    console.log(`Image failed to load for ${place.name}:`, photoUrl);
    
    // If it's a Flickr image and we haven't tried all formats yet, try the next format
    if (hasRealImages && place.images![currentImageIndex].includes('flickr.com') && flickrAttempt < 3) {
      console.log(`Trying Flickr format ${flickrAttempt + 1} for ${place.name}`);
      setFlickrAttempt(prev => prev + 1);
      setImageLoaded(false);
      return;
    }
    
    // All Flickr formats failed or it's not a Flickr image, show error
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log(`Image loaded successfully for ${place.name}:`, photoUrl);
    setImageLoaded(true);
    setImageError(false);
  };

  function getPhotoId(id: string): string {
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
      'secret-cabin-baguio': '1520250497591-112f2f40a3f4',
      'cozynest-rentals': '1571896349842-33c89424de2d',
      'metro-pines-inn': '1564501049229-cc18ee5aef86',
      'whitehouse-lord-scents': '1582719478250-c89cae4dc85b',
      'atenara-house': '1520637736862-4d197d17c93a',
      'red-lion-pub-inn': '1551882547-a62d0657a5d6',
      '1896-bb': '1586023492675-c216d39128aa',
      'valencia-baguio-transient': '1520250497591-112f2f40a3f4',
      'st-john-inn': '1566073112-1c3b4c71c1c8',
      'jalo-naja-apartelles': '1571896349842-33c89424de2d',
      'baguio-holiday-villas': '1564501049229-cc18ee5aef86',
      'pine-breeze-cottages': '1582719478250-c89cae4dc85b',
      // Restaurants
      'ozark-diner-bnb': '1414728735-6f71dcaae5bd',
      'qilla-restaurant': '1565299507-6678700f2ef2',
      'ili-likha-artists-village': '1504674900-24d2d516e702',
      'chaya-restaurant': '1579871734-a35c0844ec25',
      'farmers-daughter-restaurant': '1504674900-24d2d516e702',
      'good-taste-legarda': '1414728735-6f71dcaae5bd',
      'cafe-by-ruins-dua': '1565299507-6678700f2ef2',
      'mamas-table': '1579871734-a35c0844ec25',
      'oh-my-gulay': '1504674900-24d2d516e702',
      'hill-station': '1414728735-6f71dcaae5bd',
      'canto-bogchi-joint': '1565299507-6678700f2ef2',
      'arcas-yard-restaurant': '1579871734-a35c0844ec25'
    };
    return photoMap[id] || '1554118811-1e0d58224f24';
  }

  return (
    <>
      <TouchableOpacity 
        style={[styles.card, hasPhoto && styles.photoCard, { backgroundColor: colors.cardBackground, borderColor: colors.border }]} 
        onPress={handleCardPress}
        activeOpacity={hasPhoto ? 0.7 : 1}
        disabled={!hasPhoto || !place.directions}
      >
        {hasPhoto && (
          <View style={styles.photoContainer}>
            <Image 
              source={{ uri: photoUrl }} 
              style={styles.placePhoto}
              resizeMode="cover"
              onError={handleImageError}
              onLoad={handleImageLoad}
              onLoadStart={() => console.log(`Loading image for ${place.name}:`, photoUrl)}
            />
            {!imageLoaded && !imageError && (
              <View style={styles.imageLoadingOverlay}>
                <Text style={styles.loadingText}>Loading...</Text>
              </View>
            )}
            {imageError && (
              <View style={styles.imageErrorOverlay}>
                <Text style={styles.errorText}>Image unavailable</Text>
              </View>
            )}
            {hasMultipleImages && (
              <>
                <TouchableOpacity 
                  style={[styles.imageNavButton, styles.prevButton]}
                  onPress={prevImage}
                >
                  <ChevronLeft size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.imageNavButton, styles.nextButton]}
                  onPress={nextImage}
                >
                  <ChevronRight size={20} color="#fff" />
                </TouchableOpacity>
                <View style={styles.imageIndicator}>
                  <Text style={styles.imageIndicatorText}>
                    {currentImageIndex + 1} / {place.images!.length}
                  </Text>
                </View>
              </>
            )}
          </View>
        )}
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.name, { color: colors.text }]}>{place.name}</Text>
            <View style={[styles.typeContainer, { backgroundColor: colors.buttonBackground }]}>
              <Text style={[styles.type, { color: colors.buttonText }]}>{place.type}</Text>
            </View>
          </View>

          {place.google_rating && (
            <View style={styles.ratingContainer}>
              <Star size={16} color="#FFB800" fill="#FFB800" />
              <Text style={[styles.rating, { color: colors.text }]}>{place.google_rating}</Text>
            </View>
          )}

          {place.google_reviews_snippet && (
            <Text style={[styles.snippet, { color: colors.textSecondary }]}>{place.google_reviews_snippet}</Text>
          )}

          {place.address && (
            <View style={styles.addressContainer}>
              <MapPin size={14} color={colors.textSecondary} />
              <Text style={[styles.address, { color: colors.textSecondary }]}>{place.address}</Text>
            </View>
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.primaryButton, { backgroundColor: colors.primary, borderColor: colors.primary }]} 
              onPress={handleOpenMaps}
              testID={`open-maps-${place.id}`}
            >
              <MapPin size={16} color="#fff" />
              <Text style={styles.primaryButtonText}>Open Maps</Text>
            </TouchableOpacity>

            {place.google_place_url && (
              <TouchableOpacity 
                style={[styles.button, { backgroundColor: colors.surface, borderColor: colors.border }]} 
                onPress={handleOpenGoogleReviews}
                testID={`google-reviews-${place.id}`}
              >
                <ExternalLink size={16} color={colors.primary} />
                <Text style={[styles.buttonText, { color: colors.primary }]}>Google Reviews</Text>
              </TouchableOpacity>
            )}

            {place.website && (
              <TouchableOpacity 
                style={[styles.button, { backgroundColor: colors.surface, borderColor: colors.border }]} 
                onPress={handleOpenWebsite}
                testID={`website-${place.id}`}
              >
                <Globe size={16} color={colors.primary} />
                <Text style={[styles.buttonText, { color: colors.primary }]}>Website</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>

      {hasPhoto && place.directions && (
        <Modal
          visible={showModal}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setShowModal(false)}
        >
          <View style={[styles.modalContainer, { backgroundColor: colors.modalBackground }]}>
            <View style={[styles.modalHeader, { borderBottomColor: colors.border }]}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>{place.name}</Text>
              <TouchableOpacity 
                onPress={() => setShowModal(false)}
                style={[styles.closeButton, { backgroundColor: colors.buttonBackground }]}
              >
                <X size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.modalContent}>
              <View style={styles.modalPhotoContainer}>
                <Image 
                  source={{ uri: photoUrl }} 
                  style={styles.modalPhoto}
                  resizeMode="cover"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                  onLoadStart={() => console.log(`Loading modal image for ${place.name}:`, photoUrl)}
                />
                {!imageLoaded && !imageError && (
                  <View style={[styles.imageLoadingOverlay, styles.modalLoadingOverlay]}>
                    <Text style={styles.loadingText}>Loading...</Text>
                  </View>
                )}
                {imageError && (
                  <View style={[styles.imageErrorOverlay, styles.modalErrorOverlay]}>
                    <Text style={styles.errorText}>Image unavailable</Text>
                  </View>
                )}
                {hasMultipleImages && (
                  <>
                    <TouchableOpacity 
                      style={[styles.imageNavButton, styles.prevButton, styles.modalNavButton]}
                      onPress={prevImage}
                    >
                      <ChevronLeft size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={[styles.imageNavButton, styles.nextButton, styles.modalNavButton]}
                      onPress={nextImage}
                    >
                      <ChevronRight size={24} color="#fff" />
                    </TouchableOpacity>
                    <View style={[styles.imageIndicator, styles.modalImageIndicator]}>
                      <Text style={styles.imageIndicatorText}>
                        {currentImageIndex + 1} / {place.images!.length}
                      </Text>
                    </View>
                  </>
                )}
              </View>
              
              <View style={styles.modalInfo}>
                <Text style={[styles.modalDescription, { color: colors.text }]}>
                  {place.google_reviews_snippet}
                </Text>
                
                {place.directions && (
                  <View style={styles.directionsSection}>
                    <Text style={[styles.directionsTitle, { color: colors.text }]}>How to get there:</Text>
                    <Text style={[styles.directionsText, { color: colors.textSecondary }]}>{place.directions}</Text>
                  </View>
                )}
                
                <View style={styles.modalButtons}>
                  <TouchableOpacity 
                    style={[styles.button, styles.primaryButton, { backgroundColor: colors.primary, borderColor: colors.primary }]} 
                    onPress={handleOpenMaps}
                  >
                    <MapPin size={16} color="#fff" />
                    <Text style={styles.primaryButtonText}>Open Maps</Text>
                  </TouchableOpacity>
                  
                  {place.google_place_url && (
                    <TouchableOpacity 
                      style={[styles.button, { backgroundColor: colors.surface, borderColor: colors.border }]} 
                      onPress={handleOpenGoogleReviews}
                    >
                      <ExternalLink size={16} color={colors.primary} />
                      <Text style={[styles.buttonText, { color: colors.primary }]}>Google Reviews</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '600' as const,
    flex: 1,
    marginRight: 8,
  },
  typeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  type: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '500' as const,
  },
  ratingContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '500' as const,
    marginLeft: 4,
  },
  snippet: {
    fontSize: 14,
    fontFamily: 'System',
    lineHeight: 20,
    marginBottom: 8,
  },
  addressContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    marginBottom: 16,
  },
  address: {
    fontSize: 13,
    fontFamily: 'System',
    marginLeft: 4,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    gap: 8,
  },
  button: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 44,
  },
  primaryButton: {},
  buttonText: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '500' as const,
    marginLeft: 4,
  },
  primaryButtonText: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '500' as const,
    color: '#fff',
    marginLeft: 4,
  },
  photoCard: {
    overflow: 'hidden',
    padding: 0,
  },
  content: {
    padding: 16,
  },
  photoContainer: {
    position: 'relative',
    width: '100%',
    height: 120,
    marginBottom: 12,
  },
  placePhoto: {
    width: '100%',
    height: 120,
  },
  imageNavButton: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -20 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  prevButton: {
    left: 8,
  },
  nextButton: {
    right: 8,
  },
  imageIndicator: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  imageIndicatorText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '500' as const,
  },
  modalContainer: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600' as const,
    flex: 1,
  },
  closeButton: {
    padding: 8,
    borderRadius: 8,
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
  },
  modalPhotoContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
  },
  modalPhoto: {
    width: '100%',
    height: 250,
  },
  modalNavButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  modalImageIndicator: {
    bottom: 16,
    right: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  modalInfo: {
    padding: 16,
  },
  modalDescription: {
    fontSize: 16,
    fontFamily: 'System',
    lineHeight: 24,
    marginBottom: 20,
  },
  directionsSection: {
    marginBottom: 24,
  },
  directionsTitle: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '600' as const,
    marginBottom: 8,
  },
  directionsText: {
    fontSize: 14,
    fontFamily: 'System',
    lineHeight: 20,
  },
  modalButtons: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    gap: 12,
  },
  imageLoadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageErrorOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalLoadingOverlay: {
    height: 250,
  },
  modalErrorOverlay: {
    height: 250,
  },
  loadingText: {
    color: '#666',
    fontSize: 14,
    fontFamily: 'System',
  },
  errorText: {
    color: '#999',
    fontSize: 14,
    fontFamily: 'System',
  },
});