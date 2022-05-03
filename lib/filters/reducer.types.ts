export enum filterActionsTypes {
  SET_filterByStars = 'SET_filterByStars',
  CLEAR_filterByStars = 'CLEAR_filterByStars',
  SET_filterByHotelFacilities = 'SET_filterByHotelFacilities',
  SET_filterByPriceMin = 'SET_filterByPriceMin',
  SET_filterByPriceMax = 'SET_filterByPriceMax',
  CLEAR_filters = 'CLEAR_filters',
}

type ActionFilterByStarsSet = { type: filterActionsTypes.SET_filterByStars; payload: string };
type ActionFilterByStarsClear = { type: filterActionsTypes.CLEAR_filterByStars };
type ActionFilterByHotelFacilitiesSet = {
  type: filterActionsTypes.SET_filterByHotelFacilities;
  payload: string;
};
type ActionFilterByPriceMin = {
  type: filterActionsTypes.SET_filterByPriceMin;
  payload: string;
};
type ActionFilterByPriceMax = {
  type: filterActionsTypes.SET_filterByPriceMax;
  payload: string;
};
type ActionFiltersClear = { type: filterActionsTypes.CLEAR_filters };

export type ActionTypeFilters =
  | ActionFilterByStarsSet
  | ActionFilterByStarsClear
  | ActionFilterByHotelFacilitiesSet
  | ActionFiltersClear
  | ActionFilterByPriceMin
  | ActionFilterByPriceMax;
