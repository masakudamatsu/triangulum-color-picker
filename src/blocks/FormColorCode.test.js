import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

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
        width: 303px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: auto;
          width: 364px;
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
        padding-bottom: 8px;
        padding-left: 7.75px;
        padding-top: 30px;
        text-align: left;
        width: 100%;
      }

      .c1:active,
      .c1:hover,
      .c1:focus {
        padding-bottom: 7px;
        padding-left: 6.75px;
        padding-top: 29px;
      }

      @media only screen and (min-width:728px) {
        .c1 {
          font-size: 2.1429rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          padding-bottom: 9.6px;
          padding-left: 9.299999999999999px;
          padding-top: 36px;
        }

        .c1:active,
        .c1:hover,
        .c1:focus {
          padding-bottom: 8.6px;
          padding-left: 8.299999999999999px;
          padding-top: 35px;
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
        top: 11px;
        left: 11px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          top: 13px;
          left: 13px;
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
