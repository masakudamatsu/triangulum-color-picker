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
      line-height: 1;
      margin-bottom: -0.3158em;
      -webkit-transform: translateY(-0.1286em);
      -ms-transform: translateY(-0.1286em);
      transform: translateY(-0.1286em);
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
