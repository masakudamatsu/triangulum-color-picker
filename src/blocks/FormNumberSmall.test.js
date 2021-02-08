import React from 'react';
import {render} from '@testing-library/react';

import FormNumberSmall from './FormNumberSmall';

const mockProps = {
  parent: {},
  innerwrapper: {},
  input: {},
  label: {},
};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<FormNumberSmall {...mockProps.parent} />);
    expect(container).toMatchInlineSnapshot(`
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

      <div>
        <form
          class="c0"
        />
      </div>
    `);
  });
  test('InnerWrapper', () => {
    const {container} = render(
      <FormNumberSmall.InnerWrapper {...mockProps.innerwrapper} />,
    );
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
        height: 48px;
        width: 48px;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 58px;
          width: 58px;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Input', () => {
    const {container} = render(<FormNumberSmall.Input {...mockProps.input} />);
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
        font-size: 1.3393rem;
        font-weight: 300;
        border-radius: 100%;
        height: 100%;
        padding-top: 9px;
        text-align: center;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          font-size: 1.6071rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          padding-top: 10.799999999999999px;
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
    const {container} = render(<FormNumberSmall.Label {...mockProps.label} />);
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
        -webkit-transform: translateY(-0.1375em);
        -ms-transform: translateY(-0.1375em);
        transform: translateY(-0.1375em);
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        position: absolute;
        top: 5px;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          top: 6px;
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
