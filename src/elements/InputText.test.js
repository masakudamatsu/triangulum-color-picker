import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import InputText from './InputText';
import Label from './Label';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<InputText {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background-color: inherit;
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      border-radius: 4px;
      color: inherit;
      font-size: 1.5rem;
      height: 100%;
      padding: 35.0937px 10.5342px 11.3609px;
      text-align: left;
      width: 100%;
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
