import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Payloads from './Payloads';

const payloads = [
  {
    id: '12345',
    type: 'Satellite'
  },
  {
    id: '54321',
    type: 'Dragon Boilerplate'
  }
];

describe('displays the payloads', () => {
  it('displays the heading', () => {
    // ARRANGE
    const { getByText } = render(<Payloads payloads={payloads} />);

    // ASSERT
    expect(getByText('Payloads')).toBeInTheDocument();
  });

  it('displays the payloads', () => {
    // ARRANGE
    const { getByText } = render(<Payloads payloads={payloads} />);

    // ASSERT
    expect(getByText('12345')).toBeInTheDocument();
    expect(getByText('Satellite')).toBeInTheDocument();
    expect(getByText('54321')).toBeInTheDocument();
    expect(getByText('Dragon Boilerplate')).toBeInTheDocument();
  });
});