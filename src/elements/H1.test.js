import React from 'react';
import {render} from '@testing-library/react';

import H1 from './H1';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<H1 {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins',Verdana,sans-serif;
      font-size: 1.3393rem;
      font-weight: 300;
      line-height: 1.274;
      -webkit-transform: translateX(-0.065em);
      -ms-transform: translateX(-0.065em);
      transform: translateX(-0.065em);
    }

    .c0::before,
    .c0::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c0::before {
      margin-bottom: -0.304em;
    }

    .c0::after {
      margin-top: -0.3325em;
    }

    @media only screen and (min-width:45.5rem) {
      .c0 {
        font-size: 1.6071rem;
      }
    }

    <div>
      <h1
        class="c0"
      />
    </div>
  `);
});
