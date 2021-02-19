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
      line-height: 1.2285;
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
      margin-bottom: -0.263em;
    }

    .c0::after {
      margin-top: -0.316em;
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
