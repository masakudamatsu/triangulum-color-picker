import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import CrossTopLeft from 'src/components/CrossTopLeft';

const mockProps = {
  color: 'white',
};

// DELETE THIS LINE
// describe.skip('delete this line', () => {
test('renders UI correctly', () => {
  const {container} = render(<CrossTopLeft {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      stroke: rgb(255,255,255);
    }

    .c0 {
      position: absolute;
      width: 30px;
      top: 0;
      left: 0;
    }

    <div>
      <svg
        class="c0"
        viewBox="0 0 30 30"
      >
        <line
          class="c1"
          x1="0"
          x2="30"
          y1="10"
          y2="10"
        />
        <line
          class="c1"
          x1="10"
          x2="10"
          y1="0"
          y2="30"
        />
      </svg>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<CrossTopLeft {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
// }); // DELETE THIS LINE
