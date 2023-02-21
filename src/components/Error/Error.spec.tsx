import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorAlert from './Error';

describe('displays the error', () => {
  it('contains the text', () => {
    // ARRANGE
    const { getByText } = render(<ErrorAlert>There was an error</ErrorAlert>);

    // ASSERT
    expect(getByText('There was an error')).toBeInTheDocument();
  });
});