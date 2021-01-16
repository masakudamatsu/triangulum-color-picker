import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForRgb from 'src/components/TextFieldForRgb';

const mockProps = {
  handleChange: {
    r: jest.fn().mockName('handleChange.r'),
    g: jest.fn().mockName('handleChange.g'),
    b: jest.fn().mockName('handleChange.b'),
  },
  r: 235,
  g: 22,
  b: 123,
};

test('changes RGB values according to the props', () => {
  const newProps = {
    r: 34,
    g: 123,
    b: 222,
  };
  render(<TextFieldForRgb {...mockProps} {...newProps} />);

  expect(screen.getByLabelText(/r/i)).toHaveValue(newProps.r.toString());
  expect(screen.getByLabelText(/g/i)).toHaveValue(newProps.g.toString());
  expect(screen.getByLabelText(/b/i)).toHaveValue(newProps.b.toString());
});

test('calls handleChange functions when the user enters RGB values', () => {
  const newValues = {
    r: '245',
    g: '21',
    b: '196',
  };
  render(<TextFieldForRgb {...mockProps} />);

  userEvent.type(screen.getByLabelText(/r/i), newValues.r);

  expect(mockProps.handleChange.r).toHaveBeenCalledTimes(newValues.r.length);

  userEvent.type(screen.getByLabelText(/g/i), newValues.g);

  expect(mockProps.handleChange.g).toHaveBeenCalledTimes(newValues.g.length);

  userEvent.type(screen.getByLabelText(/b/i), newValues.b);

  expect(mockProps.handleChange.b).toHaveBeenCalledTimes(newValues.b.length);
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForRgb {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
