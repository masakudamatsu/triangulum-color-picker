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

test('is accessible', async () => {
  const {container} = render(<TextInputForm {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
