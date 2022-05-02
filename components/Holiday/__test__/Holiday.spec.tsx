import React from 'react';
import HolidayMock from './HolidayMock.json';
import Holidays from '../Holidays';

jest.mock('@component/Holiday', () => ({
  __esModule: true,
  HolidayTile: (): JSX.Element => <div data-testid="HolidayTile" />,
}));

describe('Holidays', () => {
  it('should render the holidays', () => {});
});
