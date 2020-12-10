import cases from 'jest-in-case';

import getContrastRatio from './getContrastRatio';

cases(
  'returns the correct contrast ratio for:',
  options => {
    expect(getContrastRatio(options.r, options.g, options.b)).toBe(
      options.contrastRatio,
    );
  },
  {
    'standard RGB code': {
      r: 234,
      g: 130,
      b: 222,
      contrastRatio: 8.75,
    },
    'red value is 10 or less': {
      r: 4,
      g: 130,
      b: 222,
      contrastRatio: 5.25,
    },
    'green value is 10 or less': {
      r: 234,
      g: 10,
      b: 222,
      contrastRatio: 5.6,
    },
    'blue value is 10 or less': {
      r: 234,
      g: 130,
      b: 2,
      contrastRatio: 7.69,
    },
  },
);
