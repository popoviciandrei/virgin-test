import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { fetchHolidays } from '@lib/api/client';
import { Holidays, Filters } from '@components/Holiday';

import { HolidayQuery, ApplyFiltersTypeFunction } from '@components/Holiday/Filters.type';
import {
  FetchHolidaysParams,
  FetchHolidaysResponse,
  Holiday as HolidayType,
  HolidayFilters,
} from '@lib/api/types';

interface PageProps extends FetchHolidaysResponse {
  query: HolidayQuery;
}

const HolidaysPage: NextPage<PageProps> = ({ holidays: holidayProps, query }): JSX.Element => {
  const router = useRouter();
  const [appliedFilters, setAppliedFilters] = useState(false);
  const [holidays, setHolidays] = useState(holidayProps);
  const [loading, setLoading] = useState(false);

  const { location, departureDate, duration } = query;

  const applyFilters: ApplyFiltersTypeFunction = async (filters) => {
    setAppliedFilters(true);

    const request = {
      location,
      departureDate,
      duration,
      ...filters,
    };
    setLoading(true);
    const { holidays } = await fetchHolidays(request);
    setHolidays(holidays);
    setLoading(false);
    router.replace(
      {
        pathname: router.pathname,
        query: request,
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <div>
      {(appliedFilters || holidays.length) && <Filters applyFilters={applyFilters} query={query} />}
      {loading && <h2>Loading holidays...</h2>}
      {!loading && <Holidays holidays={holidays} />}
    </div>
  );
};

// This function gets called at build time SSR
HolidaysPage.getInitialProps = async ({ query }): Promise<PageProps> => {
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
      filterByStars,
      filterByHotelFacilities,
      filterByPriceMin,
      filterByPriceMax,
    },
  };
};

export default HolidaysPage;
