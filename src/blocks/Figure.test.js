import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Figure from './Figure';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(
    <Figure {...mockProps}>
      <Figure.Canvas />
      <Figure.Canvas overlay />
    </Figure>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      position: absolute;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      width: 431px;
    }

    @media only screen and (min-width:943px) {
      .c0 {
        -webkit-order: 1;
        -ms-flex-order: 1;
        order: 1;
      }
    }

    @media only screen and (min-width:1326px) and (min-height:511px) {
      .c0 {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
      }
    }

    <div>
      <figure
        class="c0"
      >
        <canvas
          class=""
        />
        <canvas
          class="c1"
        />
      </figure>
    </div>
  `);
});
