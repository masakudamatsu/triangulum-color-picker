import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Canvas from './Canvas';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<Canvas {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <canvas
        class="Canvas-eu1h5j-0"
      />
    </div>
  `);
});

test('gets absolutely positioned if the overlay prop is provided', () => {
  render(<Canvas overlay {...mockProps} data-testid="canvas" />);
  expect(screen.getByTestId('canvas')).toHaveStyle('position: absolute');
});
