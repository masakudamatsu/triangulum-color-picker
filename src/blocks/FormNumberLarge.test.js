import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import FormNumberLarge from './FormNumberLarge';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(
    <FormNumberLarge {...mockProps}>
      <FormNumberLarge.Label>Chroma</FormNumberLarge.Label>
      <FormNumberLarge.Paragraph>
        Chroma is different from saturation
      </FormNumberLarge.Paragraph>
      <FormNumberLarge.InnerWrapper>
        <FormNumberLarge.Input value={50} />
        <FormNumberLarge.Unit>%</FormNumberLarge.Unit>
      </FormNumberLarge.InnerWrapper>
    </FormNumberLarge>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c5 {
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      color: inherit;
    }

    .c5:active,
    .c5:hover,
    .c5:focus {
      border-width: 2px;
      outline: none;
    }

    .c1 {
      font-family: 'Poppins';
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      color: inherit;
    }

    .c3 {
      font-family: 'Poppins';
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      margin-bottom: -0.28em;
      -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
      -ms-transform: translateX(-0.08em) translateY(-0.1375em);
      transform: translateX(-0.08em) translateY(-0.1375em);
      text-align: left;
    }

    .c7 {
      font-family: 'Poppins';
      font-size: 1.7806rem;
      font-weight: 100;
      margin-bottom: -0.771em;
      -webkit-transform: translateX(-0.065em) translateY(-0.37em);
      -ms-transform: translateX(-0.065em) translateY(-0.37em);
      transform: translateX(-0.065em) translateY(-0.37em);
    }

    .c0 {
      background-color: inherit;
      width: auto;
    }

    .c4 {
      position: relative;
    }

    .c6 {
      font-family: 'Poppins';
      font-size: 5.3419rem;
      font-weight: 100;
      line-height: 1;
      border: none;
      height: 100px;
      padding-right: 20px;
      text-align: right;
      width: 100%;
    }

    .c2 {
      margin-bottom: -0.771em;
      -webkit-transform: translateX(-0.065em) translateY(-0.37em);
      -ms-transform: translateX(-0.065em) translateY(-0.37em);
      transform: translateX(-0.065em) translateY(-0.37em);
      display: block;
    }

    .c8 {
      position: absolute;
      right: 0;
      top: 60px;
    }

    @media only screen and (min-width:728px) {
      .c1 {
        font-size: 1.0714rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c3 {
        font-size: 1.0714rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c7 {
        font-size: 2.1368rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c6 {
        font-size: 6.4103rem;
      }
    }

    <div>
      <form
        class="c0"
      >
        <label
          class="c1 c2"
        >
          Chroma
        </label>
        <p
          class="c3"
        >
          Chroma is different from saturation
        </p>
        <div
          class="c4"
        >
          <input
            autocomplete="off"
            class="c5 c6"
            type="text"
            value="50"
          />
          <span
            class="c7 c8"
          >
            %
          </span>
        </div>
      </form>
    </div>
  `);
});
