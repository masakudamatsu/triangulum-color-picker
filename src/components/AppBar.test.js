import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import AppBar from 'src/components/AppBar';

const mockProps = {};

test('is accessible', async () => {
  const {container} = render(<AppBar {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
// }); // DELETE THIS LINE
