import React from 'react';
import { render } from '@testing-library/react';
import Holidays from '../Holidays';

jest.mock('@components/Holiday', () => ({
  __esModule: true,
  HolidayTile: (props): JSX.Element => <div data-testid="HolidayTile" {...props} />,
}));

describe('Holidays', () => {
  it('should render the Holidays', () => {
    const { container } = render(<Holidays holidays={['holiday 1', 'holiday 2']} />);
    expect(container).toMatchSnapshot();
  });
  it('should render no holidays', () => {
    const { container } = render(<Holidays />);
    expect(container).toMatchSnapshot();
  });
});
