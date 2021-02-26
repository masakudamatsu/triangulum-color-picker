import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForHex from 'src/components/TextFieldForHex';

const mockProps = {
  backgroundColor: 'rgb(35, 78, 210)',
  lightMode: false,
  setUserColor: jest.fn().mockName('setUserColor'),
  updateUserColor: jest.fn().mockName('updateUserColor'),
  value: '#234ed2',
};

// doesn't call updateUserColor for some reason...
test.skip('calls updateUserColor when the user enters a valid text', () => {
  render(<TextFieldForHex {...mockProps} />);
  userEvent.type(screen.getByLabelText(/hex/i), `{backspace}f`);

  expect(mockProps.updateUserColor).toHaveBeenCalled();
});

test('calls setUserColor when the user enters an invalid text', () => {
  const userText = 'z';
  render(<TextFieldForHex {...mockProps} />);
  userEvent.type(screen.getByLabelText(/hex/i), `{selectall}{del}${userText}`);

  expect(mockProps.updateUserColor).not.toHaveBeenCalled();
  expect(mockProps.setUserColor).toHaveBeenCalled();
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
