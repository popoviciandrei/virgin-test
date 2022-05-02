import { HolidayFilters } from '@lib/api/types';

export type HolidayQuery = {
  location: string;
  departureDate: string;
  duration: string;
  filterByStars?: string;
  filterByHotelFacilities?: string;
  filterByPriceMin?: string;
  filterByPriceMax?: string;
};

export interface FiltersProps {
  applyFilters: ApplyFiltersTypeFunction;
  query: HolidayQuery;
}

export type ApplyFiltersTypeFunction = (filters: HolidayFilters) => void;
