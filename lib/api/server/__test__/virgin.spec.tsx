// @ts-ignore
import mockHolidays from './fetchHolidaysMockRes.json';
import { FetchHolidaysParams, FetchHolidaysResponse } from '../../types';
import { filter } from '../virgin';

describe('apply the right filtering', () => {
  const data = [
    [{ filterByStars: '5' }, 18],
    [{ filterByStars: '4' }, 11],
    [{ filterByStars: '5', filterByHotelFacilities: 'box' }, 15],
    [{ filterByHotelFacilities: 'restaurant' }, 52],
    [
      {
        filterByStars: '5',
        filterByHotelFacilities: 'box',
        filterByPriceMin: 1000,
        filterByPriceMax: 2000,
      },
      6,
    ],
    [{ filterByStars: 'Villas' }, 8],
    [{ filterByPriceMin: 1000 }, 31],
    [{ filterByPriceMin: 1000, filterByPriceMax: 2000 }, 20],
  ];
  // @ts-ignore
  it.each(data)('For these filters "%o" we should have "%s" holidays', (req, expectation) => {
    // @ts-ignore
    const response = filter({
      // @ts-ignore
      data: { ...mockHolidays },
      // @ts-ignore
      req,
    });
    expect(response.holidays.length).toBe(expectation);
  });
});
