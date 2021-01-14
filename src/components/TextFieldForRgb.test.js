import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextFieldForRgb from 'src/components/TextFieldForRgb';

const mockProps = {
  handleChange: {
    r: jest.fn().mockName('handleChange.r'),
    g: jest.fn().mockName('handleChange.g'),
    b: jest.fn().mockName('handleChange.b'),
  },
  r: 235,
  g: 22,
  b: 123,
};

test('renders UI correctly', () => {
  const {container} = render(<TextFieldForRgb {...mockProps} />);
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
      height: 100%;
      padding-top: 8px;
      text-align: center;
      width: 100%;
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
      margin-bottom: -0.28em;
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
      width: 100%;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      position: relative;
      height: 48px;
      width: 48px;
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

    @media only screen and (min-width:728px) {
      .c4 {
        font-size: 1.6071rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c2 {
        font-size: 1.0714rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        height: 58px;
        width: 58px;
      }
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
            for="r"
          >
            R
          </label>
          <input
            autocomplete="off"
            class="c4"
            id="r"
            type="text"
            value="235"
          />
        </div>
        <div
          class="c1"
        >
          <label
            class="c2 c3"
            for="g"
          >
            G
          </label>
          <input
            autocomplete="off"
            class="c4"
            id="g"
            type="text"
            value="22"
          />
        </div>
        <div
          class="c1"
        >
          <label
            class="c2 c3"
            for="b"
          >
            B
          </label>
          <input
            autocomplete="off"
            class="c4"
            id="b"
            type="text"
            value="123"
          />
        </div>
      </form>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<TextFieldForRgb {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('changes RGB values according to the props', () => {
  const newProps = {
    r: 34,
    g: 123,
    b: 222,
  };
  render(<TextFieldForRgb {...mockProps} {...newProps} />);

  expect(screen.getByLabelText(/r/i)).toHaveValue(newProps.r.toString());
  expect(screen.getByLabelText(/g/i)).toHaveValue(newProps.g.toString());
  expect(screen.getByLabelText(/b/i)).toHaveValue(newProps.b.toString());
});

test('calls handleChange functions when the user enters RGB values', () => {
  const newValues = {
    r: '245',
    g: '21',
    b: '196',
  };
  render(<TextFieldForRgb {...mockProps} />);

  userEvent.type(screen.getByLabelText(/r/i), newValues.r);

  expect(mockProps.handleChange.r).toHaveBeenCalledTimes(newValues.r.length);

  userEvent.type(screen.getByLabelText(/g/i), newValues.g);

  expect(mockProps.handleChange.g).toHaveBeenCalledTimes(newValues.g.length);

  userEvent.type(screen.getByLabelText(/b/i), newValues.b);

  expect(mockProps.handleChange.b).toHaveBeenCalledTimes(newValues.b.length);
});
