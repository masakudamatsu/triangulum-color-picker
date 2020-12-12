import cases from 'jest-in-case';

import round from './round';

cases(
  'returns the correct outputs:',
  options => {
    expect(round(options.inputs[0], options.inputs[1])).toEqual(
      options.outputs,
    );
  },
  {
    'Rounds up': {
      inputs: [12.345, 2],
      outputs: 12.35,
    },
    'Rounds off': {
      inputs: [12.345, 1],
      outputs: 12.3,
    },
    'Rounds to integer': {
      inputs: [12.345, 0],
      outputs: 12,
    },
  },
);
