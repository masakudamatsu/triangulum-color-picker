import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForHex from 'src/components/TextFieldForHex';

const mockProps = {
  handleChange: jest.fn().mockName('handleChange'),
  lightMode: false,
  value: '#234ed2',
};

test('calls handleChange as the user enters text', () => {
  const userText = 'abc';
  render(<TextFieldForHex {...mockProps} />);
  userEvent.type(screen.getByLabelText(/hex/i), userText);

  expect(mockProps.handleChange).toHaveBeenCalledTimes(userText.length);
});

test('changes the color property by the lightMode prop', () => {
  // This test is done in FormHex.test.js
});

test('changes the hex code according to the value prop', () => {
  const newHexCode = '#34ff2d';
  const {rerender} = render(<TextFieldForHex {...mockProps} />);
  expect(screen.getByLabelText(/hex/i)).toHaveValue(mockProps.value);
  rerender(<TextFieldForHex {...mockProps} value={newHexCode} />);
  expect(screen.getByLabelText(/hex/i)).toHaveValue(newHexCode);
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForHex {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
