import { HolidayFilters } from '@lib/api/types';
import { ActionTypeFilters, filterActionsTypes } from './reducer.types';

export const initialState: HolidayFilters = {
  filterByHotelFacilities: '',
  filterByStars: '',
  filterByPriceMax: '',
  filterByPriceMin: '',
};

const filterReducer = (state: HolidayFilters, action: ActionTypeFilters) => {
  console.log(`Reducer action: ${JSON.stringify(action)}`);

  switch (action.type) {
    case filterActionsTypes.SET_filterByStars:
      return { ...state, filterByStars: action.payload };
      break;
    case filterActionsTypes.CLEAR_filterByStars:
      const { filterByStars, ...newState } = state;
      return newState;
      break;
    case filterActionsTypes.SET_filterByHotelFacilities:
      return { ...state, filterByHotelFacilities: action.payload };
      break;
    case filterActionsTypes.SET_filterByPriceMin:
      return { ...state, filterByPriceMin: action.payload };
      break;
    case filterActionsTypes.SET_filterByPriceMax:
      return { ...state, filterByPriceMax: action.payload };
      break;
    case filterActionsTypes.CLEAR_filters:
      return initialState;
      break;
    default:
      return state;
  }
};

export default filterReducer;
