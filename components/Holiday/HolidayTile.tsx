import Image from 'next/image';
import { FetchHolidaysParams, FetchHolidaysResponse, Holiday } from '@lib/api/types';

const HolidayTile = ({ holiday }: { holiday: Holiday }): JSX.Element => {
  return (
    <li>
      <h2>
        {holiday.hotel.name} {holiday.hotel.content.starRating || 1}*
      </h2>
      <p>{holiday.hotel.content.parentLocation}</p>
      <Image
        src={`https:${holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}`}
        width="240"
        height="180"
        quality="75"
        alt={holiday.hotel.name}
        loading={'lazy'}
      />
      <p>
        <b>Total Price:</b> &pound;{holiday.totalPrice}
      </p>
      <p>
        <b>Hotel Facilities:</b>
      </p>
      <ul>
        {holiday.hotel.content.hotelFacilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
    </li>
  );
};

export default HolidayTile;
