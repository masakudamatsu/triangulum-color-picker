import cases from 'jest-in-case';

import getCanvasMetrics from './getCanvasMetrics';

cases(
  'returns the correct contrast ratio for:',
  options => {
    expect(getCanvasMetrics(options.pixelSize)).toEqual(options.output);
  },
  {
    'pixel size 3': {
      pixelSize: 3,
      output: {
        canvasWidth: 431,
        circleCenterX: 215.5,
        circleCenterY: 215.5,
        circleRadius: 214.5,
        lineWidth: 2,
        squareTopLeftX: 64,
        squareTopLeftY: 64,
      },
    },
    'pixel size 9': {
      pixelSize: 9,
      output: {
        canvasWidth: 1289,
        circleCenterX: 644.5,
        circleCenterY: 644.5,
        circleRadius: 643.5,
        lineWidth: 2,
        squareTopLeftX: 190,
        squareTopLeftY: 190,
      },
    },
  },
);
