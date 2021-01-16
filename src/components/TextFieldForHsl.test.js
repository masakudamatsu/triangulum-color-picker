import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForHsl from 'src/components/TextFieldForHsl';

const mockProps = {
  handleChange: {
    h: jest.fn().mockName('handleChange.h'),
    s: jest.fn().mockName('handleChange.s'),
    l: jest.fn().mockName('handleChange.l'),
  },
  h: 235,
  s: 22,
  l: 56,
};

test('changes RGB values according to the props', () => {
  const newProps = {
    h: 34,
    s: 23,
    l: 22,
  };
  render(<TextFieldForHsl {...mockProps} {...newProps} />);

  expect(screen.getByLabelText(/h/i)).toHaveValue(newProps.h.toString());
  expect(screen.getByLabelText(/s/i)).toHaveValue(newProps.s.toString());
  expect(screen.getByLabelText(/l/i)).toHaveValue(newProps.l.toString());
});

test('calls handleChange functions when the user enters HSL values', () => {
  const newValues = {
    h: '145',
    s: '81',
    l: '46',
  };
  render(<TextFieldForHsl {...mockProps} />);

  userEvent.type(screen.getByLabelText(/h/i), newValues.h);

  expect(mockProps.handleChange.h).toHaveBeenCalledTimes(newValues.h.length);

  userEvent.type(screen.getByLabelText(/s/i), newValues.s);

  expect(mockProps.handleChange.s).toHaveBeenCalledTimes(newValues.s.length);

  userEvent.type(screen.getByLabelText(/l/i), newValues.l);

  expect(mockProps.handleChange.l).toHaveBeenCalledTimes(newValues.l.length);
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForHsl {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
