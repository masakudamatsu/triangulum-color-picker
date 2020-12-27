import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextInputForm from 'src/components/TextInputForm';

const mockProps = {
  inputId: 'colorCode',
  labelText: 'Enter color code',
  handleChange: jest.fn().mockName('handleChange'),
};

afterEach(() => {
  window.localStorage.clear();
});

test('entering text calls handleChange function with the entered text as its argument', () => {
  const userText = 'abc';

  render(<TextInputForm {...mockProps} />);

  userEvent.type(screen.getByLabelText(mockProps.labelText), userText);

  expect(mockProps.handleChange).toHaveBeenCalledTimes(userText.length);
});

test('is accessible', async () => {
  const {container} = render(<TextInputForm {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
