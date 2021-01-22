import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Img from './Img';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<Img {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      height: auto;
      max-width: 100%;
    }

    <div>
      <img
        class="c0"
      />
    </div>
  `);
});
