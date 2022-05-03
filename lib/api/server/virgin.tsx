import { virginApi } from './axios';
import { FetchHolidaysParams, FetchHolidaysResponse } from '../types';

export const filter = ({
  data: { holidays },
  req: { filterByStars, filterByHotelFacilities, filterByPriceMax, filterByPriceMin },
}: {
  data: FetchHolidaysResponse;
  req: FetchHolidaysParams;
}): FetchHolidaysResponse => {
  const filteredHolidays = holidays
    // Filter by No of Stars
    .filter(({ hotel }) => {
      if (filterByStars) {
        return filterByStars === hotel.content.starRating;
      }
      return true;
    })
    // Filter by hotel facilities
    .filter(({ hotel }) => {
      if (filterByHotelFacilities) {
        return hotel.content.hotelFacilities.find((facility) =>
          facility.toLowerCase().includes(filterByHotelFacilities.toLowerCase()),
        );
      }
      return true;
    })
    // Filter by min total price
    .filter(({ totalPrice }) => {
      if (filterByPriceMin) {
        return totalPrice >= +filterByPriceMin;
      }
      return true;
    })
    // Filter by max total price
    .filter(({ totalPrice }) => {
      if (filterByPriceMax) {
        return totalPrice <= +filterByPriceMax;
      }
      return true;
    });

  return {
    holidays: filteredHolidays,
  };
};

export const fetchHolidays = (req: FetchHolidaysParams): Promise<FetchHolidaysResponse> =>
  virginApi
    .post('/cjs-search-api/search', {
      ...req,
      // hardcoded some of the requet properties for proof of concepts
      bookingType: 'hotel',
      partyCompositions: [
        {
          adults: 2,
          childAges: [],
          infants: 0,
        },
      ],
    })
    .then(({ data }) =>
      filter({
        data,
        req,
      }),
    )
    .catch((e) => {
      console.log(`E /cjs-search-api/search ${e.stack}`);
      return { holidays: [] };
    });
