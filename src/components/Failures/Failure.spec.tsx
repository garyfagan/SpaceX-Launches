import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Failures from './Failures';

const failures = [
  {
    altitude: 1,
    time: 2,
    reason: 'merlin engine failure'
  },
  {
    altitude: 3,
    time: 4,
    reason: 'harmonic oscillation leading to premature engine shutdown'
  }
];

describe('displays the failures', () => {
  it('contains the altitude, time and reason', () => {
    // ARRANGE
    const { getByText } = render(<Failures failures={failures} />);

    // ASSERT
    expect(getByText('Altitude: 1')).toBeInTheDocument();
    expect(getByText('Time: 2')).toBeInTheDocument();
    expect(getByText('merlin engine failure')).toBeInTheDocument();
    expect(getByText('Altitude: 3')).toBeInTheDocument();
    expect(getByText('Time: 4')).toBeInTheDocument();
    expect(getByText('harmonic oscillation leading to premature engine shutdown')).toBeInTheDocument();
  });
});