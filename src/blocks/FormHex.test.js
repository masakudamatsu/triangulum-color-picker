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
      position: relative;
      height: 109px;
      width: 109px;
    }

    .c4 {
      font-family: 'Poppins';
      font-size: 1.3393rem;
      font-weight: 300;
      border-radius: 100%;
      height: 100%;
      text-align: center;
      width: 100%;
    }

    .c2 {
      margin-bottom: -0.28em;
      -webkit-transform: translateY(-0.1375em);
      -ms-transform: translateY(-0.1375em);
      transform: translateY(-0.1375em);
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      position: absolute;
      top: 18px;
    }

    @media only screen and (min-width:728px) {
      .c1 {
        font-size: 1.0714rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c0 {
        height: 131px;
        width: 131px;
      }
    }

    @media only screen and (min-width:728px) {
      .c4 {
        font-size: 1.6071rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c2 {
        top: 21.599999999999998px;
      }
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
          class="c3 c4"
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
