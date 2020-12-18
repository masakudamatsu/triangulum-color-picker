import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import SpacerVertical from './SpacerVertical';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(<SpacerVertical {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      height: 1rem;
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<SpacerVertical {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
