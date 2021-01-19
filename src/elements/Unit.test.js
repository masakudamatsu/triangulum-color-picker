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
      font-size: 1.7806rem;
      font-weight: 100;
      -webkit-transform: translateY(0.46em);
      -ms-transform: translateY(0.46em);
      transform: translateY(0.46em);
    }

    @media only screen and (min-width:728px) {
      .c0 {
        font-size: 2.1368rem;
      }
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
