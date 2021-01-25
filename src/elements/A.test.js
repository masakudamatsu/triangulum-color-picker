import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import A from './A';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<A {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="A-sc-1pp6uji-0"
      />
    </div>
  `);
});
