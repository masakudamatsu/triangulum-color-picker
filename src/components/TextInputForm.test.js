import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextInputForm from 'src/components/TextInputForm';

const mockProps = {
  inputId: 'colorCode',
  labelText: 'Enter color code',
  setUserColor: jest.fn().mockName('setUserColor'),
  updateUserColor: jest.fn().mockName('updateUserColor'),
  userColor: 'rgb(255, 0, 0)',
};

afterEach(() => {
  window.localStorage.clear();
});

test.skip('entering hex code calls setUserColor with the appropriate arguments', () => {
  const userText = '#22345a';

  render(<TextInputForm {...mockProps} />);

  userEvent.type(
    screen.getByLabelText(mockProps.labelText),
    `{selectall}{del}${userText}`,
  );

  expect(mockProps.updateUserColor).toHaveBeenCalledTimes(1);

  expect(mockProps.updateUserColor).toHaveBeenCalledWith(userText, 'hex');
});

test.skip('entering rgb code calls setUserColor for each key stroke and finally calls updateUserColor', () => {
  const userText = 'rgb(223,11,123)';

  render(<TextInputForm {...mockProps} />);

  userEvent.type(
    screen.getByLabelText(mockProps.labelText),
    `{selectall}{del}${userText}`,
  );

  expect(mockProps.setUserColor).toHaveBeenCalledTimes(userText.length);

  expect(mockProps.updateUserColor).toHaveBeenCalledTimes(1);

  expect(mockProps.updateUserColor).toHaveBeenCalledWith(userText, 'rgb');
});

test.skip('entering hsl code calls setUserColor with the appropriate arguments', () => {
  const userText = 'hsl(123, 11%, 23%)';

  render(<TextInputForm {...mockProps} />);

  userEvent.type(
    screen.getByLabelText(mockProps.labelText),
    `{selectall}{del}${userText}`,
  );

  expect(mockProps.updateUserColor).toHaveBeenCalledTimes(1);

  expect(mockProps.updateUserColor).toHaveBeenCalledWith(userText, 'hsl');
});

test('is accessible', async () => {
  const {container} = render(<TextInputForm {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
