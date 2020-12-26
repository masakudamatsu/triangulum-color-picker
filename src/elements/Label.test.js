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
      font-family: 'Poppins';
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
      -ms-transform: translateX(-0.08em) translateY(-0.1375em);
      transform: translateX(-0.08em) translateY(-0.1375em);
      color: inherit;
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
