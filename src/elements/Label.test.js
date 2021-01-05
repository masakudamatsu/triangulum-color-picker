import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Label from './Label';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('with the numberLarge prop', () => {
    const {container} = render(<Label numberLarge {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins';
        font-size: 1.7857rem;
        font-weight: 300;
        margin-bottom: -0.771em;
        -webkit-transform: translateX(-0.065em) translateY(-0.37em);
        -ms-transform: translateX(-0.065em) translateY(-0.37em);
        transform: translateX(-0.065em) translateY(-0.37em);
        color: inherit;
      }

      <div>
        <label
          class="c0"
        />
      </div>
    `);
  });

  test('without the numberLarge prop', () => {
    const {container} = render(<Label {...mockProps} />);
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
        color: inherit;
      }

      <div>
        <label
          class="c0"
        />
      </div>
    `);
  });
});
