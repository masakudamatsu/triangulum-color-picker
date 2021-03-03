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
    h: 18,
    s: 66,
    l: 29,
  },
};

test('changes HSL values according to the props', () => {
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

describe('calls setUserColor with an object of color codes when the user enters a valid value', () => {
  beforeEach(() => {
    render(<TextFieldForHsl {...mockProps} />);
  });

  it('H value field', () => {
    userEvent.type(screen.getByLabelText(/h/i), '1');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenCalledWith({
      b: 123,
      cssCode: 'hsl(181, 66%, 29%)',
      g: 121,
      h: '181',
      hex: '#19797b',
      r: 25,
      validCode: 'hsl(181, 66%, 29%)',
    });
  });

  it('S value field', () => {
    userEvent.type(screen.getByLabelText(/s/i), '{backspace}');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenCalledWith({
      b: 70,
      cssCode: 'hsl(18, 6%, 29%)',
      g: 72,
      hex: '#4e4846',
      r: 78,
      s: '6',
      validCode: 'hsl(18, 6%, 29%)',
    });
  });

  it('L value field', () => {
    userEvent.type(screen.getByLabelText(/l/i), '{backspace}');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenCalledWith({
      b: 2,
      cssCode: 'hsl(18, 66%, 2%)',
      g: 4,
      hex: '#080402',
      l: '2',
      r: 8,
      validCode: 'hsl(18, 66%, 2%)',
    });
  });
});

describe('calls setUserColor with an invalid value when the user enters a invalid value', () => {
  beforeEach(() => {
    render(<TextFieldForHsl {...mockProps} />);
  });

  it('H value field', () => {
    userEvent.type(screen.getByLabelText(/h/i), 'g');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenCalledWith({
      h: '18g',
    });
  });

  it('S value field', () => {
    userEvent.type(screen.getByLabelText(/s/i), '9');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenCalledWith({
      s: '669',
    });
  });

  it('L value field', () => {
    userEvent.type(screen.getByLabelText(/l/i), '1');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenLastCalledWith({
      l: '291',
    });
  });
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForHsl {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
