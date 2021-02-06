import React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from 'jest-axe';

import ChromaLuminanceForm from 'src/components/ChromaLuminanceForm';

const mockProps = {
  type: 'chroma',
  value: 1,
};

afterEach(() => {
  window.localStorage.clear();
});

test('displays the value specified as the value prop', () => {
  const {rerender} = render(<ChromaLuminanceForm {...mockProps} />);
  const outputElement = screen.getByTestId('chroma');
  expect(outputElement).toHaveTextContent(mockProps.value.toString());

  const newValue = 21;
  rerender(<ChromaLuminanceForm {...mockProps} value={newValue} />);
  expect(outputElement).toHaveTextContent(newValue.toString());
});

describe('renders text correctly by type prop:', () => {
  test('chroma', () => {
    render(<ChromaLuminanceForm {...mockProps} />);
    expect(screen.getByText('Chroma')).toBeVisible();
    expect(
      screen.getByText('Pure hue share in the mix with gray'),
    ).toBeVisible();
    expect(screen.getByText('%')).toBeVisible();
    expect(screen.getByText(/100% for pure hue/i)).toBeVisible();
  });
  test('luminance', () => {
    render(<ChromaLuminanceForm {...mockProps} type="luminance" />);
    expect(screen.getByText('Luminance')).toBeVisible();
    expect(screen.getByText('Contrast ratio against pure black')).toBeVisible();
    expect(screen.getByText(':')).toBeVisible();
    expect(screen.getByText(/21:1/i)).toBeVisible();
  });
});

test('is accessible', async () => {
  const {container} = render(<ChromaLuminanceForm {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
