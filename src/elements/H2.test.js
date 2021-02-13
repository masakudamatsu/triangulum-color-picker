import React from 'react';
import {render} from '@testing-library/react';

import H2 from './H2';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<H2 {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins',Verdana,sans-serif;
      font-size: 1.7857rem;
      font-weight: 300;
      margin-bottom: -0.771em;
      -webkit-transform: translateX(-0.065em) translateY(-0.37em);
      -ms-transform: translateX(-0.065em) translateY(-0.37em);
      transform: translateX(-0.065em) translateY(-0.37em);
    }

    @media only screen and (min-width:45.5rem) {
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

test('changes the style with the hidden prop', () => {
  const {container} = render(<H2 {...mockProps} hidden />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-clip: rect(1px 1px 1px 1px);
      clip: rect(1px 1px 1px 1px);
      -webkit-clip: rect(1px,1px,1px,1px);
      clip: rect(1px,1px,1px,1px);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    <div>
      <h2
        class="c0"
        hidden=""
      />
    </div>
  `);
});
