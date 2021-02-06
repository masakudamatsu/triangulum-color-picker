import React from 'react';
import {render} from '@testing-library/react';
import {axe} from 'jest-axe';

import AppBar from 'src/components/AppBar';

const mockProps = {};

test('is accessible', async () => {
  const {container} = render(<AppBar {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
// }); // DELETE THIS LINE
