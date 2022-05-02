import React from 'react';
import { render } from '@testing-library/react';
import HolidayMock from './HolidayMock.json';
import HolidayTile from '../HolidayTile';

describe('HolidayTile', () => {
  it('Should render the right Holiday component', () => {
    const { container } = render(<HolidayTile holiday={HolidayMock} />);
    expect(container).toMatchSnapshot();
  });
});
