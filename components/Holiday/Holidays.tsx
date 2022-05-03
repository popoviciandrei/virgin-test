import React from 'react';
import { HolidayTile } from '@components/Holiday/';

import { FetchHolidaysResponse as Props } from '@lib/api/types';

const Holidays = ({ holidays }: Props): JSX.Element => {
  if (!holidays?.length) {
    return <h2>No holidays found!</h2>;
  }

  return (
    <>
      <h1>{holidays.length} holidays found</h1>
      <ul>
        {holidays.map((holiday, index) => (
          <HolidayTile holiday={holiday} key={index} />
        ))}
      </ul>
    </>
  );
};

export default Holidays;
