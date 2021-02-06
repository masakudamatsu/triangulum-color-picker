import React from 'react';
import {render} from '@testing-library/react';

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
      background-color: rgb(10,10,10);
      border-color: rgb(255,255,255);
      border-style: solid;
      border-width: 1px;
      color: rgb(255,255,255);
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
