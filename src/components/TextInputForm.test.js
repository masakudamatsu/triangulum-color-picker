import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextInputForm from 'src/components/TextInputForm';

const mockProps = {
  setUserColor: jest.fn().mockName('setUserColor'),
  updateUserColor: jest.fn().mockName('updateUserColor'),
  userColor: 'rgb(255, 0, 0)',
};

test('changes the CSS color code shown in the text field according to the userColor prop value', () => {
  const {rerender} = render(<TextInputForm {...mockProps} />);
  const inputElement = screen.getByLabelText(/color code/i);
  expect(inputElement).toHaveValue(mockProps.userColor);

  const newUserColor = 'hsl(34, 45%, 60%)';
  rerender(<TextInputForm {...mockProps} userColor={newUserColor} />);
  expect(inputElement).toHaveValue(newUserColor);
});

test('calls updateUserColor when the user enters a valid text', () => {
  const validCode = 'rgb(234,11,145)';
  render(
    <TextInputForm {...mockProps} userColor={validCode.substring(0, 14)} />,
  );
  userEvent.type(screen.getByLabelText(/color code/i), validCode[14]);

  expect(mockProps.setUserColor).not.toHaveBeenCalled();
  expect(mockProps.updateUserColor).toHaveBeenCalledTimes(1);
  expect(mockProps.updateUserColor).toHaveBeenCalledWith(validCode, 'rgb');
});

test('calls setUserColor when the user enters an invalid text', () => {
  render(<TextInputForm {...mockProps} />);
  userEvent.type(screen.getByLabelText(/color code/i), 'x');
  expect(mockProps.updateUserColor).not.toHaveBeenCalled();
  expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
  expect(mockProps.setUserColor).toHaveBeenCalledWith({
    cssCode: mockProps.userColor + 'x',
  });
});

test('is accessible', async () => {
  const {container} = render(<TextInputForm {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
