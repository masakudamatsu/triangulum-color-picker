import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Spacer from './Spacer';

const mockProps = {
  height: '100px',
  width: '100px',
};

test('renders UI correctly', () => {
  const {container} = render(<Spacer {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      height: 100px;
      width: 100px;
    }

    <div>
      <div
        class="c0"
        height="100px"
        width="100px"
      />
    </div>
  `);
});

test('changes height and width according to props', () => {
  const newHeight = '200px';
  const newWidth = '200px';
  render(
    <Spacer
      {...mockProps}
      height={newHeight}
      width={newWidth}
      data-testid="spacer"
    />,
  );
  expect(screen.getByTestId('spacer')).toHaveStyle(`
    height: ${newHeight};
    width: ${newWidth};
  `);
});
