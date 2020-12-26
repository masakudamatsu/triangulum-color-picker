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
      font-family: 'Poppins';
      font-size: 1.7857rem;
      font-weight: 300;
      background-color: inherit;
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      border-radius: 4px;
      color: inherit;
      height: 100%;
      padding-bottom: 8px;
      padding-left: 7.75px;
      padding-top: 30px;
      text-align: left;
      width: 100%;
    }

    .c0:active,
    .c0:hover,
    .c0:focus {
      border-width: 2px;
      outline: none;
      padding-left: 6.75px;
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
