import { NextPage } from 'next';
import { useState, useEffect } from 'react';

import { HolidayTile } from '@components/Holiday';
import { fetchHolidays } from '@lib/api/client';
import { FetchHolidaysParams, FetchHolidaysResponse, Holiday as HolidayType } from '@lib/api/types';

type HolidayQuery = {
  location: string;
  departureDate: string;
  duration: string;
  filterByStars?: string;
  filterByHotelFacilities?: string;
  filterByPriceMin?: string;
  filterByPriceMax?: string;
};

interface PageProps extends FetchHolidaysResponse {
  query: HolidayQuery;
}

const Holidays: NextPage<PageProps> = ({ holidays: holidayProps, query }): JSX.Element => {
  const [filterByStars, setFilterByStars] = useState();
  const [holidays, setHolidays] = useState(holidayProps);

  return (
    <>
      {!holidays.length && <p>No holidays found</p>}
      {holidays.length && (
        <div>
          <h1>{holidays.length} holidays found</h1>
          <ul>
            {holidays.map((holiday, index) => (
              <HolidayTile holiday={holiday} key={index} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

// This function gets called at build time SSR
Holidays.getInitialProps = async ({ query }): Promise<PageProps> => {
  const {
    location,
    departureDate,
    duration,
    filterByStars,
    filterByHotelFacilities,
    filterByPriceMin,
    filterByPriceMax,
  } = query as HolidayQuery;
  const { holidays } = await fetchHolidays({
    location,
    departureDate,
    duration,
    filterByStars,
    filterByHotelFacilities,
    filterByPriceMin,
    filterByPriceMax,
  });

  return {
    holidays,
    query: {
      location,
      departureDate,
      duration,
    },
  };
};

export default Holidays;
