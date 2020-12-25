import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextInputForm from 'src/components/TextInputForm';

const mockProps = {
  inputId: 'colorCode',
  labelText: 'Enter color code',
  setUserColor: jest.fn().mockName('setUserColor'),
};

afterEach(() => {
  window.localStorage.clear();
});

test('Typed text persists', () => {
  const {unmount} = render(<TextInputForm {...mockProps} />);
  const textField = screen.getByLabelText(mockProps.labelText);
  const testText = 'Masa';

  userEvent.type(textField, testText);

  expect(textField).toHaveValue(testText);

  unmount();
  render(<TextInputForm {...mockProps} />);

  expect(textField).toHaveValue(testText);
});

test('entering text calls setUserColor function with the entered text as its argument', () => {
  const userText = 'abc';

  render(<TextInputForm {...mockProps} />);

  userEvent.type(screen.getByLabelText(mockProps.labelText), userText);

  expect(mockProps.setUserColor).toHaveBeenCalledTimes(userText.length);
  expect(mockProps.setUserColor).toHaveBeenLastCalledWith(userText);
});

test('renders initial UI correctly', () => {
  const {container} = render(<TextInputForm {...mockProps} />);
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
          for="colorCode"
        >
          Enter color code
        </label>
        <input
          autocomplete="off"
          class="c3"
          id="colorCode"
          type="text"
          value=""
        />
      </form>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<TextInputForm {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
