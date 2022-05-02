import { virginCSApi } from './axios';
import { FetchHolidaysParams, FetchHolidaysResponse } from '../types';

export const fetchHolidays = (fn: FetchHolidaysParams): Promise<FetchHolidaysResponse> => {
  return virginCSApi
    .post('/api/search', fn)
    .then(({ data, ...response }) => data)
    .catch((e) => {
      console.log(`E ${e.stack}`);
      return { holidays: [] };
    });
};
