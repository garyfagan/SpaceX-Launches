import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Logo from './Logo';

describe('displays the logo', () => {
  it('contains the correct image', () => {
    // ARRANGE
    const { getByAltText } = render(<Logo />);
    const logo = getByAltText('logo');

    // ASSERT
    expect(logo).toHaveAttribute('src', 'logo.svg');
    expect(logo).toHaveAttribute('alt', 'logo');
  });

  it('contains the alt text', () => {
    // ARRANGE
    const { getByAltText } = render(<Logo />);
    const logo = getByAltText('logo');

    // ASSERT
    expect(logo).toHaveAttribute('alt', 'logo');
  });
});