import cases from 'jest-in-case';

import remify from './remify';

cases(
  'returns the correct outputs:',
  options => {
    expect(remify(options.inputs)).toEqual(options.outputs);
  },
  {
    '18px': {
      inputs: 18,
      outputs: '1.125rem',
    },
    '31.43px': {
      inputs: 31.43,
      outputs: '1.9644rem',
    },
  },
);

cases(
  'returns an error when the argument is not a number',
  options => {
    expect(() => {
      remify(options.inputs);
    }).toThrow(options.outputs);
  },
  {
    missing: {
      inputs: undefined,
      outputs:
        'The argument is missing. Provide a number of the pixel value to be converted into rem.',
    },
    string: {
      inputs: '16',
      outputs: 'The argument must be a number, but you provided a string',
    },
  },
);
