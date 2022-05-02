export interface FetchHolidaysParams {
  location: string;
  departureDate: string;
  duration: string;
  bookingType?: string;
  partyCompositions?: PartyComposition[];
  filterByStars?: string;
  filterByHotelFacilities?: string;
  filterByPriceMin?: string;
  filterByPriceMax?: string;
}

export interface PartyComposition {
  adults: number;
  childAges: any[];
  infants: number;
}

export interface FetchHolidaysResponse {
  holidays: Holiday[];
}

export interface Holiday {
  totalPrice: number;
  pricePerPerson: number;
  hotel: Hotel;
  flyingClubMiles: number;
  virginPoints: number;
  tierPoints: number;
  departureDate: string;
  selectedDate: string;
}

export interface Hotel {
  id: string;
  name: string;
  boardBasis: string;
  content: Content;
}

export interface Content {
  name: string;
  vRating: string;
  hotelDescription: string;
  atAGlance: string[];
  parentLocation: string;
  images: Image[];
  holidayType: string[];
  boardBasis: string[];
  hotelLocation: string[];
  accommodationType: string[];
  hotelFacilities: string[];
  starRating: string;
  propertyType: string;
}

export interface Image {
  RESULTS_CAROUSEL: ResultsCarousel;
}

export interface ResultsCarousel {
  url: string;
}
