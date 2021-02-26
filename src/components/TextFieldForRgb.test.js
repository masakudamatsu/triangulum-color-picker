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

test.skip('forces the field with an invalid value to be focused after blurring', () => {
  // THIS TEST DOES NOT WORK...
  render(<TextFieldForRgb {...mockProps} />);
  userEvent.click(screen.getByLabelText(/r/i));
  userEvent.type(screen.getByLabelText(/r/i), '9');
  userEvent.click(screen.getByLabelText(/g/i));
  expect(screen.getByLabelText(/r/i)).toHaveFocus();
});

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

describe('calls setUserColor when the user enters valid RGB values', () => {
  beforeEach(() => {
    render(<TextFieldForRgb {...mockProps} />);
  });

  const newValues = {
    r: '245',
    g: '21',
    b: '196',
  };

  it('R value field', () => {
    userEvent.type(screen.getByLabelText(/r/i), newValues.r);

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(newValues.r.length);
  });

  it('G value field', () => {
    userEvent.type(screen.getByLabelText(/g/i), newValues.g);

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(newValues.g.length);
  });

  it('B value field', () => {
    userEvent.type(screen.getByLabelText(/b/i), newValues.b);

    expect(mockProps.setUserColor).toHaveBeenCalledTimes(newValues.b.length);
  });
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForRgb {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
