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
      margin-bottom: -0.771em;
      -webkit-transform: translateX(-0.065em) translateY(-0.37em);
      -ms-transform: translateX(-0.065em) translateY(-0.37em);
      transform: translateX(-0.065em) translateY(-0.37em);
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
