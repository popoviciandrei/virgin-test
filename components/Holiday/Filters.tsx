import React, { useState } from 'react';

import { HolidayFilters, HolidayFiltersKeys } from '@lib/api/types';

import { HolidayQuery, FiltersProps } from './Filters.type';

import { hotelStars } from '@lib/search/filters';

const Filters = ({
  applyFilters,
  query: { filterByStars, filterByHotelFacilities, filterByPriceMin, filterByPriceMax },
}: FiltersProps): JSX.Element => {
  const [filters, _setFilters] = useState({
    filterByStars,
    filterByHotelFacilities,
    filterByPriceMin,
    filterByPriceMax,
  } as HolidayFilters);

  const setFilters = (key: HolidayFiltersKeys, value: string) => {
    _setFilters({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div>
      <h2>Filter results by:</h2>
      <label htmlFor="filterByStars">
        No of Stars
        <select
          name="filterByStars"
          id="filterByStars"
          style={{ height: '30px', width: '200px' }}
          onChange={(e) => {
            if (e.target.value) {
              setFilters(HolidayFiltersKeys.filterByStars, e.target.value);
            }
          }}
          value={filters.filterByStars || ''}
        >
          {hotelStars.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
          <option value="">Any</option>
        </select>
      </label>
      <br />
      <label htmlFor="filterByHotelFacilities">
        Facilities
        <input
          name="hotel_facilities"
          id="filterByHotelFacilities"
          type="text"
          value={filters?.filterByHotelFacilities || ''}
          onChange={(e) => {
            setFilters(HolidayFiltersKeys.filterByHotelFacilities, e.target.value);
          }}
        />
      </label>
      <br />
      <label htmlFor="filterByPriceMin">
        MinPrice:
        <input
          name="filterByPriceMin"
          id="filterByPriceMin"
          type="number"
          value={filters?.filterByPriceMin || ''}
          onChange={(e) => {
            setFilters(HolidayFiltersKeys.filterByPriceMin, e.target.value);
          }}
        />
      </label>
      <label htmlFor="filterByPriceMax">
        MaxPrice:
        <input
          name="filterByPriceMax"
          id="filterByPriceMax"
          type="number"
          value={filters?.filterByPriceMax || ''}
          onChange={(e) => {
            setFilters(HolidayFiltersKeys.filterByPriceMax, e.target.value);
          }}
        />
      </label>
      <br />

      <button onClick={() => applyFilters(filters)}>Apply Filters</button>
      <button
        onClick={() => {
          _setFilters({});
          applyFilters({});
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
