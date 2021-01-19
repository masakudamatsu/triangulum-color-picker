import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Input from './Input';

const mockProps = {
  backgroundColor: '#654321',
  onChange: jest.fn(),
  value: '#654321',
};

test('renders UI correctly when:', () => {
  const {container} = render(<Input {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      color: inherit;
    }

    .c0:active,
    .c0:hover,
    .c0:focus {
      border-width: 2px;
      outline: none;
    }

    <div>
      <input
        autocomplete="off"
        class="c0"
        type="text"
        value="#654321"
      />
    </div>
  `);
});
