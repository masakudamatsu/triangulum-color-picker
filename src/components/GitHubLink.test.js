import React from 'react';
import {render} from '@testing-library/react';
import {axe} from 'jest-axe';

import GitHubLink from 'src/components/GitHubLink';

const mockProps = {};

test('is accessible', async () => {
  const {container} = render(<GitHubLink {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
