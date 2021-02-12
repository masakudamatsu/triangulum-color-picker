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
