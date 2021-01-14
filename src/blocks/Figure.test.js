import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Figure from './Figure';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(
    <Figure {...mockProps}>
      <Figure.Canvas />
      <Figure.Canvas overlay />
    </Figure>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      position: absolute;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    <div>
      <figure
        class="c0"
      >
        <canvas
          class=""
        />
        <canvas
          class="c1"
        />
      </figure>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(
    <Figure {...mockProps}>
      <Figure.Canvas />
      <Figure.Canvas overlay />
    </Figure>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});