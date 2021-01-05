import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Unit from './Unit';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(
    <p>
      100
      <Unit {...mockProps} data-testid="percent">
        %
      </Unit>
    </p>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins';
      font-size: 1.7857rem;
      font-weight: 100;
      margin-bottom: -0.771em;
      -webkit-transform: translateX(-0.065em) translateY(-0.37em);
      -ms-transform: translateX(-0.065em) translateY(-0.37em);
      transform: translateX(-0.065em) translateY(-0.37em);
    }

    <div>
      <p>
        100
        <span
          class="c0"
          data-testid="percent"
        >
          %
        </span>
      </p>
    </div>
  `);
});
