import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Line from './Line';

const mockProps = {
  lineColor: 'black',
  x1: '0',
  x2: '10',
  y1: '0',
  y2: '10',
};

test('changes the stroke property by the lineColor prop', () => {
  const {rerender} = render(
    <svg viewBox={`0 0 ${mockProps.x2} ${mockProps.y2}`}>
      <Line {...mockProps} data-testid="line" />
    </svg>,
  );
  expect(screen.getByTestId('line')).toHaveStyle(
    `stroke: ${mockProps.lineColor}`,
  );

  const newColor = 'white';

  rerender(
    <svg viewBox={`0 0 ${mockProps.x2} ${mockProps.y2}`}>
      <Line {...mockProps} lineColor={newColor} data-testid="line" />
    </svg>,
  );
  expect(screen.getByTestId('line')).toHaveStyle(`stroke: ${newColor}`);
});

// Snapshot and accessibility tests are skipped as they'll be tested in CrossTopLeft.test.js / CrossBottomRight.test.js
