import React from 'react';
import { Mock } from 'ts-mockery';
import { render } from '@testing-library/react';
import Holidays from '../Holidays';
import { Holiday as HolidayType } from '@lib/api/types';

jest.mock('@components/Holiday', () => ({
  __esModule: true,
  HolidayTile: (props: any): JSX.Element => <div data-testid="HolidayTile" {...props} />,
}));

describe('Holidays', () => {
  it('should render the Holidays', () => {
    const mockHolidays = [Mock.of<HolidayType>({}), Mock.of<HolidayType>({})];
    const { container } = render(<Holidays holidays={mockHolidays} />);
    expect(container).toMatchSnapshot();
  });
  it('should render no holidays', () => {
    const { container } = render(<Holidays holidays={} />);
    expect(container).toMatchSnapshot();
  });
});
