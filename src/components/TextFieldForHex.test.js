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
  userColor: '#234ed2',
};

test('changes the hex code, but not the background color, according to the userColor prop', () => {
  const newHexCode = '#34ff2d';
  const {rerender} = render(<TextFieldForHex {...mockProps} />);
  const inputElement = screen.getByLabelText(/hex/i);
  expect(inputElement).toHaveValue(mockProps.userColor);
  expect(inputElement).toHaveStyle(
    `background-color: ${mockProps.backgroundColor}`,
  );

  rerender(<TextFieldForHex {...mockProps} userColor={newHexCode} />);
  expect(inputElement).toHaveValue(newHexCode);
  expect(inputElement).toHaveStyle(
    `background-color: ${mockProps.backgroundColor}`,
  );
});

test('calls updateUserColor when the user enters a valid text', () => {
  const validHexCode = '#309abf';
  render(
    <TextFieldForHex {...mockProps} userColor={validHexCode.substring(0, 6)} />,
  );
  userEvent.type(screen.getByLabelText(/hex/i), validHexCode[6]);

  expect(mockProps.setUserColor).not.toHaveBeenCalled();
  expect(mockProps.updateUserColor).toHaveBeenCalledTimes(1);
  expect(mockProps.updateUserColor).toHaveBeenCalledWith(validHexCode, 'hex');
});

test('calls setUserColor when the user enters an invalid text', () => {
  render(<TextFieldForHex {...mockProps} />);
  userEvent.type(screen.getByLabelText(/hex/i), 'z');

  expect(mockProps.updateUserColor).not.toHaveBeenCalled();
  expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
  expect(mockProps.setUserColor).toHaveBeenCalledWith({hex: '#234ed2z'});
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForHex {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
