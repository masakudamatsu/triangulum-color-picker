import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import FormColorCode from './FormColorCode';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(
    <FormColorCode {...mockProps}>
      <FormColorCode.Label>Enter text</FormColorCode.Label>
      <FormColorCode.Input colorCode />
    </FormColorCode>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c3 {
      background-color: inherit;
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      color: inherit;
      font-family: 'Poppins';
      font-size: 1.7857rem;
      font-weight: 300;
      border-radius: 4px;
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
    }

    .c3:active,
    .c3:hover,
    .c3:focus {
      padding-left: 6.75px;
    }

    .c1 {
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

    .c0 {
      background-color: inherit;
      height: 82px;
      position: relative;
      height: auto;
      width: 303px;
    }

    .c2 {
      position: absolute;
      top: 11px;
      left: 11px;
    }

    @media only screen and (min-width:728px) {
      .c3 {
        font-size: 2.1429rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        font-size: 1.0714rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c0 {
        height: auto;
        width: 364px;
      }
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
  const {container} = render(<FormColorCode {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
