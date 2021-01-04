import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import FormHex from './FormHex';
import {color} from 'src/utils/color';
const mockProps = {
  lightMode: false,
};

test('renders UI correctly', () => {
  const {container} = render(
    <FormHex {...mockProps}>
      <FormHex.Label htmlFor="hex">Enter text</FormHex.Label>
      <FormHex.Input hex id="hex" />
    </FormHex>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c3 {
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      color: inherit;
      font-family: 'Poppins';
      font-size: 1.3393rem;
      font-weight: 300;
      border-radius: 100%;
      height: 110px;
      text-align: center;
      width: 110px;
    }

    .c3:active,
    .c3:hover,
    .c3:focus {
      border-width: 2px;
      outline: none;
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
      color: rgb(255,255,255);
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      height: 110px;
      min-height: 110px;
      min-width: 110px;
      position: relative;
      width: 110px;
    }

    .c2 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      position: absolute;
      top: 15px;
      -webkit-transform: translateX(0) translateY(-0.1375em);
      -ms-transform: translateX(0) translateY(-0.1375em);
      transform: translateX(0) translateY(-0.1375em);
    }

    <div>
      <form
        class="c0"
      >
        <label
          class="c1 c2"
          for="hex"
        >
          Enter text
        </label>
        <input
          autocomplete="off"
          class="c3"
          id="hex"
          type="text"
        />
      </form>
    </div>
  `);
});

test('changes the color property by the lightMode prop', () => {
  render(<FormHex data-testid="form" {...mockProps} lightMode={true} />);
  expect(screen.getByTestId('form')).toHaveStyle(`color: ${color.black}`);
});
