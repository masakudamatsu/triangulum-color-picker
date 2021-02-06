import React from 'react';
import {render} from '@testing-library/react';
import {axe} from 'jest-axe';

import BannerForNoJs from 'src/components/BannerForNoJs';

const mockProps = {};

test('is accessible', async () => {
  const {container} = render(<BannerForNoJs {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
