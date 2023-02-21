import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import formatDate from './formatDate';

describe('formats the date', () => {
  it('formats the date', () => {
    // ARRANGE
    const value = '2006-03-24T22:30:00.000Z';

    // ACT
    const result = formatDate(value);

    // ASSERT
    expect(result).toBe('2006-03-24');
  });
});