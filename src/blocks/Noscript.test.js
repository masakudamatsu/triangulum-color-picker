import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Noscript from './Noscript';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<Noscript {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins';
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      margin-bottom: -0.28em;
      -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
      -ms-transform: translateX(-0.08em) translateY(-0.1375em);
      transform: translateX(-0.08em) translateY(-0.1375em);
      height: auto;
      width: 303px;
    }

    @media only screen and (min-width:728px) {
      .c0 {
        font-size: 1.0714rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c0 {
        height: auto;
        width: 364px;
      }
    }

    <div>
      <noscript
        class="c0"
      />
    </div>
  `);
});
