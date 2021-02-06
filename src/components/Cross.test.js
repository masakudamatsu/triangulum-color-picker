import React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from 'jest-axe';

import Cross from 'src/components/Cross';

describe('changes attribute values correctly by prop values', () => {
  test('topLeft', () => {
    render(<Cross position="topLeft" />);
    expect(screen.getByTestId('svg')).toHaveAttribute('viewBox', '0 0 30 30');
    const horizontal = screen.getByTestId('horizontal');
    expect(horizontal).toHaveAttribute('x1', '0');
    expect(horizontal).toHaveAttribute('y1', '10');
    expect(horizontal).toHaveAttribute('x2', '30');
    expect(horizontal).toHaveAttribute('y2', '10');
    const vertical = screen.getByTestId('vertical');
    expect(vertical).toHaveAttribute('x1', '10');
    expect(vertical).toHaveAttribute('y1', '0');
    expect(vertical).toHaveAttribute('x2', '10');
    expect(vertical).toHaveAttribute('y2', '30');
  });
  test('topLeft large', () => {
    render(<Cross large position="topLeft" />);
    expect(screen.getByTestId('svg')).toHaveAttribute('viewBox', '0 0 60 60');
    const horizontal = screen.getByTestId('horizontal');
    expect(horizontal).toHaveAttribute('x1', '0');
    expect(horizontal).toHaveAttribute('y1', '20');
    expect(horizontal).toHaveAttribute('x2', '60');
    expect(horizontal).toHaveAttribute('y2', '20');
    const vertical = screen.getByTestId('vertical');
    expect(vertical).toHaveAttribute('x1', '20');
    expect(vertical).toHaveAttribute('y1', '0');
    expect(vertical).toHaveAttribute('x2', '20');
    expect(vertical).toHaveAttribute('y2', '60');
  });
  test('bottomRight', () => {
    render(<Cross position="bottomRight" />);
    expect(screen.getByTestId('svg')).toHaveAttribute('viewBox', '0 0 30 30');
    const horizontal = screen.getByTestId('horizontal');
    expect(horizontal).toHaveAttribute('x1', '0');
    expect(horizontal).toHaveAttribute('y1', '20');
    expect(horizontal).toHaveAttribute('x2', '30');
    expect(horizontal).toHaveAttribute('y2', '20');
    const vertical = screen.getByTestId('vertical');
    expect(vertical).toHaveAttribute('x1', '20');
    expect(vertical).toHaveAttribute('y1', '0');
    expect(vertical).toHaveAttribute('x2', '20');
    expect(vertical).toHaveAttribute('y2', '30');
  });
  test('bottomRight large', () => {
    render(<Cross large position="bottomRight" />);
    expect(screen.getByTestId('svg')).toHaveAttribute('viewBox', '0 0 60 60');
    const horizontal = screen.getByTestId('horizontal');
    expect(horizontal).toHaveAttribute('x1', '0');
    expect(horizontal).toHaveAttribute('y1', '40');
    expect(horizontal).toHaveAttribute('x2', '60');
    expect(horizontal).toHaveAttribute('y2', '40');
    const vertical = screen.getByTestId('vertical');
    expect(vertical).toHaveAttribute('x1', '40');
    expect(vertical).toHaveAttribute('y1', '0');
    expect(vertical).toHaveAttribute('x2', '40');
    expect(vertical).toHaveAttribute('y2', '60');
  });
});

test('is accessible', async () => {
  const {container} = render(<Cross position="topLeft" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
