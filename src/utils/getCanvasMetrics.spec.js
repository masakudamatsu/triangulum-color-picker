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
        canvasWidth: 432,
        circleCenterX: 216,
        circleCenterY: 216,
        circleRadius: 214,
        lineWidth: 4,
        squareTopLeftX: 64.5,
        squareTopLeftY: 64.5,
      },
    },
    'pixel size 10': {
      pixelSize: 10,
      output: {
        canvasWidth: 1432,
        circleCenterX: 716,
        circleCenterY: 716,
        circleRadius: 714,
        lineWidth: 4,
        squareTopLeftX: 211,
        squareTopLeftY: 211,
      },
    },
  },
);
