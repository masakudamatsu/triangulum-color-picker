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
      outputs: '1.1250rem',
    },
    '31px': {
      inputs: 31,
      outputs: '1.9375rem',
    },
  },
);
