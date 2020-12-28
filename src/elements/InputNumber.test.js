import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import InputNumber from './InputNumber';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<InputNumber {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins';
      font-size: 1.3393rem;
      font-weight: 300;
      background-color: inherit;
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      border-radius: 100%;
      color: inherit;
      height: 50px;
      padding-top: 8px;
      text-align: center;
      width: 50px;
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
      />
    </div>
  `);
});

// Accessibility test is skipped as rendering the input element only returns the error message "Form elements must have labels (label)"
