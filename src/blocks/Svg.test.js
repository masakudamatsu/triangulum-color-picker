import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Svg from './Svg';

const mockProps = {
  svg: {
    topLeft: true,
  },
  line: {
    lineColor: 'black',
    x1: '0',
    x2: '10',
    y1: '0',
    y2: '10',
  },
};

test('positions at the top left corner by setting the topLeft prop', () => {
  render(
    <Svg
      topLeft
      viewBox={`0 0 ${mockProps.x2} ${mockProps.y2}`}
      data-testid="svg"
    >
      <Svg.Line {...mockProps.line} />
    </Svg>,
  );
  expect(screen.getByTestId('svg')).toHaveStyle(`
    top: 0;
    left: 0;
  `);
});

test('positions at the bottom right corner by setting the bottomRight prop', () => {
  render(
    <Svg
      bottomRight
      viewBox={`0 0 ${mockProps.x2} ${mockProps.y2}`}
      data-testid="svg"
    >
      <Svg.Line {...mockProps.line} />
    </Svg>,
  );
  expect(screen.getByTestId('svg')).toHaveStyle(`
    bottom: 0;
    right: 0;
  `);
});

// Snapshot and accessibility tests are skipped as they'll be tested in CrossTopLeft.test.js / CrossBottomRight.test.js
