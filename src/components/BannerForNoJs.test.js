import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import BannerForNoJs from 'src/components/BannerForNoJs';

const mockProps = {};

test('is accessible', async () => {
  const {container} = render(<BannerForNoJs {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
