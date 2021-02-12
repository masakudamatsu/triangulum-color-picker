import React from 'react';
import {render} from '@testing-library/react';

import FormColorCode from './FormColorCode';

const mockProps = {
  parent: {},
  input: {},
  label: {},
};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<FormColorCode {...mockProps.parent} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: inherit;
        position: relative;
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
        <form
          class="c0"
        />
      </div>
    `);
  });
  test('Input', () => {
    const {container} = render(<FormColorCode.Input {...mockProps.input} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(10,10,10);
        border-color: rgb(255,255,255);
        border-style: solid;
        border-width: 1px;
        color: rgb(255,255,255);
      }

      .c0:active,
      .c0:hover,
      .c0:focus {
        border-width: 2px;
        outline: none;
      }

      .c1 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 1.7857rem;
        font-weight: 300;
        border-radius: 4px;
        padding-bottom: 0.5rem;
        padding-left: 0.4844rem;
        padding-top: 1.875rem;
        text-align: left;
        width: 100%;
      }

      .c1:active,
      .c1:hover,
      .c1:focus {
        padding-bottom: 0.4375rem;
        padding-left: 0.4219rem;
        padding-top: 1.8125rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          font-size: 2.1429rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          padding-bottom: 0.6rem;
          padding-left: 0.5812rem;
          padding-top: 2.25rem;
        }

        .c1:active,
        .c1:hover,
        .c1:focus {
          padding-bottom: 0.5375rem;
          padding-left: 0.5187rem;
          padding-top: 2.1875rem;
        }
      }

      <div>
        <input
          autocomplete="off"
          class="c0 c1"
          type="text"
        />
      </div>
    `);
  });
  test('Label', () => {
    const {container} = render(<FormColorCode.Label {...mockProps.label} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 0.8929rem;
        font-weight: 300;
        line-height: 1;
        color: rgb(255,255,255);
      }

      .c1 {
        margin-bottom: -0.28em;
        -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
        -ms-transform: translateX(-0.08em) translateY(-0.1375em);
        transform: translateX(-0.08em) translateY(-0.1375em);
        position: absolute;
        top: 0.6875rem;
        left: 0.6875rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          top: 0.8125rem;
          left: 0.8125rem;
        }
      }

      <div>
        <label
          class="c0 c1"
        />
      </div>
    `);
  });
});
