import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForHsl from 'src/components/TextFieldForHsl';

const mockProps = {
  setUserColor: jest.fn().mockName('setUserColor'),
  userColor: {
    validCode: 'rgb(25, 122, 122)',
    hex: '#197a7a',
    r: 25,
    g: 122,
    b: 122,
    h: 180,
    s: 66,
    l: 29,
  },
};

test('changes RGB values according to the props', () => {
  const newProps = {
    userColor: {
      h: 34,
      s: 23,
      l: 22,
    },
  };
  const {rerender} = render(<TextFieldForHsl {...mockProps} />);

  expect(screen.getByLabelText(/h/i)).toHaveValue(
    mockProps.userColor.h.toString(),
  );
  expect(screen.getByLabelText(/s/i)).toHaveValue(
    mockProps.userColor.s.toString(),
  );
  expect(screen.getByLabelText(/l/i)).toHaveValue(
    mockProps.userColor.l.toString(),
  );

  rerender(<TextFieldForHsl {...mockProps} {...newProps} />);

  expect(screen.getByLabelText(/h/i)).toHaveValue(
    newProps.userColor.h.toString(),
  );
  expect(screen.getByLabelText(/s/i)).toHaveValue(
    newProps.userColor.s.toString(),
  );
  expect(screen.getByLabelText(/l/i)).toHaveValue(
    newProps.userColor.l.toString(),
  );
});

describe('calls setUserColor when the user enters valid HSL values', () => {
  beforeEach(() => {
    render(<TextFieldForHsl {...mockProps} />);
  });

  const newValues = {
    h: '145',
    s: '81',
    l: '46',
  };

  it('H value field', () => {
    userEvent.type(screen.getByLabelText(/h/i), newValues.h);

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(newValues.h.length);
  });

  it('S value field', () => {
    userEvent.type(screen.getByLabelText(/s/i), newValues.s);

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(newValues.s.length);
  });

  it('L value field', () => {
    userEvent.type(screen.getByLabelText(/l/i), newValues.l);

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(newValues.l.length);
  });
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForHsl {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
