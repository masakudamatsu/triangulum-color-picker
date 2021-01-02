import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import CrossBottomRight from 'src/components/CrossBottomRight';

const mockProps = {
  color: 'white',
};

// DELETE THIS LINE
// describe.skip('delete this line', () => {
test('renders UI correctly', () => {
  const {container} = render(<CrossBottomRight {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      stroke: rgb(255,255,255);
    }

    .c0 {
      position: absolute;
      width: 30px;
      bottom: 0;
      right: 0;
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
          y1="20"
          y2="20"
        />
        <line
          class="c1"
          x1="20"
          x2="20"
          y1="0"
          y2="30"
        />
      </svg>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<CrossBottomRight {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
// }); // DELETE THIS LINE
