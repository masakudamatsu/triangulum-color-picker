import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForHex from 'src/components/TextFieldForHex';

const mockProps = {
  backgroundColor: 'rgb(35, 78, 210)',
  handleChange: jest.fn().mockName('handleChange'),
  lightMode: false,
  value: '#234ed2',
};

test('changes the background-color property for input element by the backgroundColor prop', () => {
  // This test is done in FormHex.test.js
});

test('calls handleChange as the user enters text', () => {
  const userText = 'abc';
  render(<TextFieldForHex {...mockProps} />);
  userEvent.type(screen.getByLabelText(/hex/i), userText);

  expect(mockProps.handleChange).toHaveBeenCalledTimes(userText.length);
});

test('changes the color property by the lightMode prop', () => {
  // This test is done in FormHex.test.js
});

test('changes the hex code, but not the background color, according to the value prop', () => {
  const newHexCode = '#34ff2d';
  const {rerender} = render(<TextFieldForHex {...mockProps} />);
  const inputElement = screen.getByLabelText(/hex/i);
  expect(inputElement).toHaveValue(mockProps.value);
  expect(inputElement).toHaveStyle(
    `background-color: ${mockProps.backgroundColor}`,
  );

  rerender(<TextFieldForHex {...mockProps} value={newHexCode} />);
  expect(inputElement).toHaveValue(newHexCode);
  expect(inputElement).toHaveStyle(
    `background-color: ${mockProps.backgroundColor}`,
  );
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForHex {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
