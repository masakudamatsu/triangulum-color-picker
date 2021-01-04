import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForHsl from 'src/components/TextFieldForHsl';

const mockProps = {
  handleChange: {
    h: jest.fn().mockName('handleChange.h'),
    s: jest.fn().mockName('handleChange.s'),
    l: jest.fn().mockName('handleChange.l'),
  },
  h: 235,
  s: 22,
  l: 56,
};

test('renders UI correctly', () => {
  const {container} = render(<TextFieldForHsl {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c4 {
      background-color: inherit;
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      color: inherit;
      font-family: 'Poppins';
      font-size: 1.3393rem;
      font-weight: 300;
      border-radius: 100%;
      height: 50px;
      padding-top: 8px;
      text-align: center;
      width: 50px;
    }

    .c4:active,
    .c4:hover,
    .c4:focus {
      border-width: 2px;
      outline: none;
    }

    .c2 {
      font-family: 'Poppins';
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
      -ms-transform: translateX(-0.08em) translateY(-0.1375em);
      transform: translateX(-0.08em) translateY(-0.1375em);
      color: inherit;
    }

    .c0 {
      background-color: inherit;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      width: 160px;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      height: 50px;
      position: relative;
      width: 50px;
    }

    .c3 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      position: absolute;
      top: 6px;
      -webkit-transform: translateX(0) translateY(-0.1375em);
      -ms-transform: translateX(0) translateY(-0.1375em);
      transform: translateX(0) translateY(-0.1375em);
    }

    <div>
      <form
        class="c0"
      >
        <div
          class="c1"
        >
          <label
            class="c2 c3"
            for="h"
          >
            H
          </label>
          <input
            autocomplete="off"
            class="c4"
            id="h"
            type="text"
            value="235"
          />
        </div>
        <div
          class="c1"
        >
          <label
            class="c2 c3"
            for="s"
          >
            S
          </label>
          <input
            autocomplete="off"
            class="c4"
            id="s"
            type="text"
            value="22"
          />
        </div>
        <div
          class="c1"
        >
          <label
            class="c2 c3"
            for="l"
          >
            L
          </label>
          <input
            autocomplete="off"
            class="c4"
            id="l"
            type="text"
            value="56"
          />
        </div>
      </form>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForHsl {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('changes RGB values according to the props', () => {
  const newProps = {
    h: 34,
    s: 23,
    l: 22,
  };
  render(<TextFieldForHsl {...mockProps} {...newProps} />);

  expect(screen.getByLabelText(/h/i)).toHaveValue(newProps.h.toString());
  expect(screen.getByLabelText(/s/i)).toHaveValue(newProps.s.toString());
  expect(screen.getByLabelText(/l/i)).toHaveValue(newProps.l.toString());
});

test('calls handleChange functions when the user enters HSL values', () => {
  const newValues = {
    h: '145',
    s: '81',
    l: '46',
  };
  render(<TextFieldForHsl {...mockProps} />);

  userEvent.type(screen.getByLabelText(/h/i), newValues.h);

  expect(mockProps.handleChange.h).toHaveBeenCalledTimes(newValues.h.length);

  userEvent.type(screen.getByLabelText(/s/i), newValues.s);

  expect(mockProps.handleChange.s).toHaveBeenCalledTimes(newValues.s.length);

  userEvent.type(screen.getByLabelText(/l/i), newValues.l);

  expect(mockProps.handleChange.l).toHaveBeenCalledTimes(newValues.l.length);
});
