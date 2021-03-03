import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import ErrorMessage from './ErrorMessage';

const mockProps = {
  errorText: 'There is an error',
};

test('shows the error prop value as its text content', () => {
  render(<ErrorMessage {...mockProps} />);
  expect(screen.getByRole('alert')).toHaveTextContent(mockProps.errorText);
});

test('is accessible', async () => {
  const {container} = render(<ErrorMessage {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
