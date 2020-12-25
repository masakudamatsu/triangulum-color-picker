import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Label from './Label';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Label {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      color: inherit;
      font-size: 0.5rem;
    }

    .c0::before {
      margin-bottom: -6.12px;
    }

    .c0::after {
      margin-top: -6.563px;
    }

    <div>
      <label
        class="c0"
      />
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Label {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
