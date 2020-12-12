import cases from 'jest-in-case';

import mixHueWithGray from './mixHueWithGray';

cases(
  'returns the correct RGB code:',
  options => {
    expect(mixHueWithGray(options.hue, options.gray, options.hueShare)).toEqual(
      options.outputRgb,
    );
  },
  {
    '50% Red and 50% White': {
      hue: {
        r: 255,
        g: 0,
        b: 0,
      },
      gray: 255,
      hueShare: 50,
      outputRgb: {r: 255, g: 127, b: 127},
    },
    '50% Red and 50% Black': {
      hue: {
        r: 255,
        g: 0,
        b: 0,
      },
      gray: 0,
      hueShare: 50,
      outputRgb: {r: 127, g: 0, b: 0},
    },
    '50% Red and 50% Gray': {
      hue: {
        r: 255,
        g: 0,
        b: 0,
      },
      gray: 127,
      hueShare: 50,
      outputRgb: {r: 191, g: 63, b: 63},
    },
    '50% Cyan and 50% White': {
      hue: {
        r: 0,
        g: 255,
        b: 255,
      },
      gray: 255,
      hueShare: 50,
      outputRgb: {r: 127, g: 255, b: 255},
    },
    '50% Cyan and 50% Black': {
      hue: {
        r: 0,
        g: 255,
        b: 255,
      },
      gray: 0,
      hueShare: 50,
      outputRgb: {r: 0, g: 127, b: 127},
    },
    '50% Cyan and 50% Gray': {
      hue: {
        r: 0,
        g: 255,
        b: 255,
      },
      gray: 127,
      hueShare: 50,
      outputRgb: {r: 63, g: 191, b: 191},
    },
    '20% Green and 80% White': {
      hue: {
        r: 0,
        g: 255,
        b: 0,
      },
      gray: 255,
      hueShare: 20,
      outputRgb: {r: 204, g: 255, b: 204},
    },
    '60% Green and 40% Black': {
      hue: {
        r: 0,
        g: 255,
        b: 0,
      },
      gray: 0,
      hueShare: 60,
      outputRgb: {r: 0, g: 153, b: 0},
    },
  },
);
