import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import H2 from './H2';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<H2 {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins';
      font-size: 1.7857rem;
      font-weight: 300;
      margin-bottom: -0.771em;
      -webkit-transform: translateX(-0.065em) translateY(-0.37em);
      -ms-transform: translateX(-0.065em) translateY(-0.37em);
      transform: translateX(-0.065em) translateY(-0.37em);
    }

    @media only screen and (min-width:728px) {
      .c0 {
        font-size: 2.1429rem;
      }
    }

    <div>
      <h2
        class="c0"
      />
    </div>
  `);
});
