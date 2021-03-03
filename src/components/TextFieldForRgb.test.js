import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForRgb from 'src/components/TextFieldForRgb';

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
      r: 34,
      g: 123,
      b: 222,
    },
  };
  const {rerender} = render(<TextFieldForRgb {...mockProps} />);
  expect(screen.getByLabelText(/r/i)).toHaveValue(
    mockProps.userColor.r.toString(),
  );
  expect(screen.getByLabelText(/g/i)).toHaveValue(
    mockProps.userColor.g.toString(),
  );
  expect(screen.getByLabelText(/b/i)).toHaveValue(
    mockProps.userColor.b.toString(),
  );

  rerender(<TextFieldForRgb {...mockProps} {...newProps} />);
  expect(screen.getByLabelText(/r/i)).toHaveValue(
    newProps.userColor.r.toString(),
  );
  expect(screen.getByLabelText(/g/i)).toHaveValue(
    newProps.userColor.g.toString(),
  );
  expect(screen.getByLabelText(/b/i)).toHaveValue(
    newProps.userColor.b.toString(),
  );
});

describe('calls setUserColor with an object of color codes when the user enters a valid value', () => {
  beforeEach(() => {
    render(<TextFieldForRgb {...mockProps} />);
  });

  it('R value field', () => {
    userEvent.type(screen.getByLabelText(/r/i), '1');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenCalledWith({
      cssCode: 'rgb(251, 122, 122)',
      h: 0,
      hex: '#fb7a7a',
      l: 73,
      r: '251',
      s: 94,
      validCode: 'rgb(251, 122, 122)',
    });
  });

  it('G value field', () => {
    userEvent.type(screen.getByLabelText(/g/i), '{backspace}');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenCalledWith({
      cssCode: 'rgb(25, 12, 122)',
      g: '12',
      h: 247,
      hex: '#190c7a',
      l: 26,
      s: 82,
      validCode: 'rgb(25, 12, 122)',
    });
  });

  it('B value field', () => {
    userEvent.type(screen.getByLabelText(/b/i), '{backspace}');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenLastCalledWith({
      b: '12',
      cssCode: 'rgb(25, 122, 12)',
      h: 113,
      hex: '#197a0c',
      l: 26,
      s: 82,
      validCode: 'rgb(25, 122, 12)',
    });
  });
});

describe('calls setUserColor with an invalid value when the user enters a invalid value', () => {
  beforeEach(() => {
    render(<TextFieldForRgb {...mockProps} />);
  });

  it('R value field', () => {
    userEvent.type(screen.getByLabelText(/r/i), 'g');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenCalledWith({
      r: '25g',
    });
  });

  it('G value field', () => {
    userEvent.type(screen.getByLabelText(/g/i), '9');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenCalledWith({
      g: '1229',
    });
  });

  it('B value field', () => {
    userEvent.type(screen.getByLabelText(/b/i), '1');

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(1);
    expect(mockProps.setUserColor).toHaveBeenLastCalledWith({
      b: '1221',
    });
  });
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForRgb {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
