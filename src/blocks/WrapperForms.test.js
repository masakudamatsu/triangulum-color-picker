import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import WrapperForms from './WrapperForms';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<WrapperForms {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <section
          class="WrapperForms-sc-6876ff-0"
        />
      </div>
    `);
  });

  test('MarginBetweenColorCodeAndHexRgbHsl', () => {
    const {container} = render(
      <WrapperForms.MarginBetweenColorCodeAndHexRgbHsl {...mockProps} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 10px;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 12px;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });

  test('WrapperHexRgbHsl', () => {
    const {container} = render(
      <WrapperForms.WrapperHexRgbHsl {...mockProps} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: auto;
        width: 303px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: auto;
          width: 364px;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });

  test('WrapperRgbHsl', () => {
    const {container} = render(<WrapperForms.WrapperRgbHsl {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        padding: 20px;
        height: auto;
        width: 194px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: auto;
          width: 233px;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding: 24px;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });

  test('MarginBetweenRgbAndHsl', () => {
    const {container} = render(
      <WrapperForms.MarginBetweenRgbAndHsl {...mockProps} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 10px;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 12px;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
