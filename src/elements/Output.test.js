import React from 'react';
import {render} from '@testing-library/react';

import Output from './Output';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Output {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins',Verdana,sans-serif;
      font-size: 5.3419rem;
      font-weight: 100;
      line-height: 1.188;
    }

    .c0::before,
    .c0::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c0::before {
      margin-bottom: -0.24em;
    }

    .c0::after {
      margin-top: -0.2575em;
    }

    @media only screen and (min-width:45.5rem) {
      .c0 {
        font-size: 6.4103rem;
      }
    }

    <div>
      <output
        class="c0"
      />
    </div>
  `);
});
