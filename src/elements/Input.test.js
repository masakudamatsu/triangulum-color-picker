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

describe('renders UI correctly when:', () => {
  test('colorCode prop is provided', () => {
    const {container} = render(<Input colorCode {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
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

      .c0:active,
      .c0:hover,
      .c0:focus {
        border-width: 2px;
        outline: none;
      }

      .c0:active,
      .c0:hover,
      .c0:focus {
        padding-left: 6.75px;
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
  test('hex prop is provided', () => {
    const {container} = render(<Input hex {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #654321;
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
  test('numberSmall prop is provided', () => {
    const {container} = render(<Input numberSmall {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: inherit;
        border-color: currentColor;
        border-style: solid;
        border-width: 1px;
        color: inherit;
        font-family: 'Poppins';
        font-size: 1.3393rem;
        font-weight: 300;
        border-radius: 100%;
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
          value="#654321"
        />
      </div>
    `);
  });
});

describe('when hex prop is provided', () => {
  test('changes the background-color property by the backgroundColor prop, but not by the value prop', () => {
    const newHexValue = '#123456';
    const {rerender} = render(
      <Input hex data-testid="input" {...mockProps} value={newHexValue} />,
    );
    expect(screen.getByTestId('input')).toHaveStyle(
      `background-color: ${mockProps.backgroundColor}`,
    );
    rerender(
      <Input
        hex
        data-testid="input"
        {...mockProps}
        backgroundColor={newHexValue}
        value={newHexValue}
      />,
    );
    expect(screen.getByTestId('input')).toHaveStyle(
      `background-color: ${newHexValue}`,
    );
  });
});
