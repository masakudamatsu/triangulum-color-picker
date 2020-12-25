import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Form from './Form';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(
    <Form {...mockProps}>
      <Form.Label>Enter text</Form.Label>
      <Form.InputText />
    </Form>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c3 {
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

    .c3:active,
    .c3:hover,
    .c3:focus {
      border-width: 2px;
      outline: none;
    }

    .c1 {
      color: inherit;
      font-size: 0.5rem;
    }

    .c1::before {
      margin-bottom: -6.12px;
    }

    .c1::after {
      margin-top: -6.563px;
    }

    .c0 {
      background-color: inherit;
      height: 81px;
      position: relative;
      width: 303px;
    }

    .c2 {
      position: absolute;
      top: 15.5342px;
      left: 12.5342px;
    }

    <div>
      <form
        class="c0"
      >
        <label
          class="c1 c2"
        >
          Enter text
        </label>
        <input
          autocomplete="off"
          class="c3"
          type="text"
        />
      </form>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Form {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
