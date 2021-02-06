import React from 'react';
import {render} from '@testing-library/react';
import {axe} from 'jest-axe';

import Footnote from 'src/components/Footnote';

const mockProps = {};

test('is accessible', async () => {
  const {container} = render(<Footnote {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
