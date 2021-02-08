import React from 'react';
import {render} from '@testing-library/react';

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
        height: 0.625rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 0.75rem;
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
        width: 18.9375rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: auto;
          width: 22.725rem;
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
        padding: 1.25rem;
        height: auto;
        width: 12.125rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: auto;
          width: 14.55rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          padding: 1.5rem;
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
        height: 0.625rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 0.75rem;
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
