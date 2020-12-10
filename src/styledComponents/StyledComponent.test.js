import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import StyledComponent from 'src/styledComponents/StyledComponent';

const mockProps = {};

// DELETE THIS LINE
describe.skip('delete this line', () => {
  test('renders UI correctly', () => {
    const {container} = render(<StyledComponent {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
    .c0 {
      width: 100%;
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `);
  });

  test('is accessible', async () => {
    const {container} = render(<StyledComponent {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); // DELETE THIS LINE
