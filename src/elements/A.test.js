import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import A from './A';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<A {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background: rgb(65,65,65);
      background: linear-gradient( to bottom,transparent 50%,rgb(173,173,173) 50%,rgb(173,173,173) );
      background-position: 0 calc(0.4em + 0.7em);
      background-repeat: no-repeat;
      background-size: 100% 2px;
      color: rgb(173,173,173);
      cursor: pointer;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-shadow: 0.03em 0 rgb(10,10,10),-0.03em 0 rgb(10,10,10),0 0.03em rgb(10,10,10),0 -0.03em rgb(10,10,10);
    }

    .c0:visited {
      background: rgb(65,65,65);
      background: linear-gradient( to bottom,transparent 50%,rgb(173,173,173) 50%,rgb(173,173,173) );
      color: rgb(173,173,173);
    }

    .c0:focus,
    .c0:hover {
      background: rgb(65,65,65);
      outline: none;
      text-shadow: none;
    }

    .c0:active {
      background: none;
    }

    .c0:visited:focus,
    .c0:visited:hover {
      background: rgb(65,65,65);
      outline: none;
      text-shadow: none;
    }

    .c0:visited:active {
      background: none;
    }

    <div>
      <a
        class="c0"
      />
    </div>
  `);
});
