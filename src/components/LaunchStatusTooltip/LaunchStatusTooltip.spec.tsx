import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import LaunchStatusTooltip from './LaunchStatusTooltip';

describe('displays the tooltip icon', () => {
  it('displays the successful icon', () => {
    // ARRANGE
    const { getByTestId } = render(<LaunchStatusTooltip isSuccessful={true} />);

    // ASSERT
    expect(getByTestId('ThumbUpIcon')).toBeInTheDocument();
  });

  it('displays the failure icon by default', () => {
    // ARRANGE
    const { getByTestId } = render(<LaunchStatusTooltip />);

    // ASSERT
    expect(getByTestId('ThumbDownIcon')).toBeInTheDocument();
  });

  it('displays the failure icon', () => {
    // ARRANGE
    const { getByTestId } = render(<LaunchStatusTooltip isSuccessful={false} />);

    // ASSERT
    expect(getByTestId('ThumbDownIcon')).toBeInTheDocument();
  });
});