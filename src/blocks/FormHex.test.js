import React from 'react';
import {render, screen} from '@testing-library/react';

import FormHex from './FormHex';
import {color} from 'src/utils/color';
const mockProps = {
  parent: {
    lightMode: false,
  },
  input: {
    backgroundColor: '#abcdef',
    lightMode: false,
  },
  label: {},
};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<FormHex {...mockProps.parent} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: rgb(255,255,255);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        height: 6.8125rem;
        width: 6.8125rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 8.175rem;
          width: 8.175rem;
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
    const {container} = render(<FormHex.Input {...mockProps.input} />);
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
        background-color: #abcdef;
        border-radius: 100%;
        color: inherit;
        height: 100%;
        text-align: center;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          font-size: 1.6071rem;
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
    const {container} = render(<FormHex.Label {...mockProps.label} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 0.8929rem;
        font-weight: 300;
        line-height: 1.365;
        color: rgb(255,255,255);
      }

      .c0::before,
      .c0::after {
        content: '';
        display: block;
        height: 0;
        width: 0;
      }

      .c0::before {
        margin-bottom: -0.3165em;
      }

      .c0::after {
        margin-top: -0.4195em;
      }

      .c1 {
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        color: inherit;
        position: absolute;
        top: 1.1875rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          top: 1.425rem;
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

describe('changes CSS properties by props', () => {
  test('lightMode prop for Parent', () => {
    render(
      <FormHex data-testid="form" {...mockProps.parent} lightMode={true} />,
    );
    expect(screen.getByTestId('form')).toHaveStyle(
      `color: ${color.fontLightMode}`,
    );
  });
  test('backgroundColor prop for Input', () => {
    const newColor = 'rgb(18, 52, 86)'; // #123456
    render(
      <FormHex.Input
        data-testid="input"
        {...mockProps.input}
        backgroundColor={newColor}
      />,
    );
    expect(screen.getByTestId('input')).toHaveStyle(
      `background-color: ${newColor}`,
    );
  });
  test('lightMode prop for Input', () => {
    render(
      <FormHex.Input
        data-testid="input"
        {...mockProps.input}
        lightMode={true}
      />,
    );
    expect(screen.getByTestId('input')).toHaveStyle(`border-width: 0px`);
  });
});
