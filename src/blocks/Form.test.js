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

    .c3:active,
    .c3:hover,
    .c3:focus {
      border-width: 2px;
      outline: none;
      padding-left: 6.75px;
    }

    .c1 {
      font-family: 'Poppins';
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
      -ms-transform: translateX(-0.08em) translateY(-0.1375em);
      transform: translateX(-0.08em) translateY(-0.1375em);
      color: inherit;
    }

    .c0 {
      background-color: inherit;
      height: 82px;
      position: relative;
      width: 303px;
    }

    .c2 {
      position: absolute;
      top: 11px;
      left: 11px;
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
