export enum HolidayFiltersKeys {
  filterByStars = 'filterByStars',
  filterByHotelFacilities = 'filterByHotelFacilities',
  filterByPriceMin = 'filterByPriceMin',
  filterByPriceMax = 'filterByPriceMax',
}
export interface HolidayFilters {
  [HolidayFiltersKeys.filterByStars]?: string;
  [HolidayFiltersKeys.filterByHotelFacilities]?: string;
  [HolidayFiltersKeys.filterByPriceMin]?: string;
  [HolidayFiltersKeys.filterByPriceMax]?: string;
}
export interface FetchHolidaysParams extends HolidayFilters {
  location: string;
  departureDate: string;
  duration: string;
  bookingType?: string;
  partyCompositions?: PartyComposition[];
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
