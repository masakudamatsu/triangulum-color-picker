import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForHex from 'src/components/TextFieldForHex';

const mockProps = {
  value: '#234ed2',
};

test('shows #000000 by default', () => {
  render(<TextFieldForHex />);
  expect(screen.getByLabelText(/hex/i)).toHaveValue('#000000');
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
