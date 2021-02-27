import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import ErrorMessage from './ErrorMessage';

const mockProps = {
  error: '',
  id: 'error-message',
};

const mockErrorText = 'This is an error message.';

test('shows the error message when the error prop is provided', () => {
  const {rerender} = render(<ErrorMessage {...mockProps} />);
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();

  rerender(
    <ErrorMessage
      {...mockProps}
      error={mockErrorText}
      data-testid="error-message-component"
    />,
  );
  expect(screen.getByRole('alert')).toHaveTextContent(mockErrorText);
});

test('adds the id prop value to the paragraph element id attribute', () => {
  render(<ErrorMessage {...mockProps} error={mockErrorText} />);
  expect(screen.getByRole('alert')).toHaveAttribute('id', mockProps.id);
});

test('is accessible', async () => {
  const {container} = render(<ErrorMessage {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
