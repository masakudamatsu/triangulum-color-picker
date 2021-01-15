import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import FormNumberSmall from './FormNumberSmall';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(
    <FormNumberSmall {...mockProps}>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label>R</FormNumberSmall.Label>
        <FormNumberSmall.Input value={255} />
      </FormNumberSmall.InnerWrapper>
    </FormNumberSmall>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c4 {
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      color: inherit;
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

    .c5 {
      font-family: 'Poppins';
      font-size: 1.3393rem;
      font-weight: 300;
      border-radius: 100%;
      height: 100%;
      padding-top: 9px;
      text-align: center;
      width: 100%;
    }

    .c3 {
      margin-bottom: -0.28em;
      -webkit-transform: translateY(-0.1375em);
      -ms-transform: translateY(-0.1375em);
      transform: translateY(-0.1375em);
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      position: absolute;
      top: 5px;
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

    @media only screen and (min-width:728px) {
      .c5 {
        font-size: 1.6071rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c5 {
        padding-top: 10.799999999999999px;
      }
    }

    @media only screen and (min-width:728px) {
      .c3 {
        top: 6px;
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
          >
            R
          </label>
          <input
            autocomplete="off"
            class="c4 c5"
            type="text"
            value="255"
          />
        </div>
      </form>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<FormNumberSmall {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
