import cases from 'jest-in-case';

import template from './template';

cases(
  'returns the correct outputs:',
  options => {
    expect(template(options.inputs)).toEqual(options.outputs);
  },
  {
    'Input example 1': {
      inputs: {},
      outputs: {},
    },
  },
);
