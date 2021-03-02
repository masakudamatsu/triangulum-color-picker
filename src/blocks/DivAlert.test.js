import React from 'react';
import {render, screen} from '@testing-library/react';

import DivAlert from './DivAlert';
import {formHex, formNumberSmall, rgbHslWrapper} from 'src/utils/specLayout';
import remify from 'src/utils/remify';
const mockProps = {};

describe('changes the left property value according to props', () => {
  test('r', () => {
    render(<DivAlert {...mockProps} r data-testid="div-alert" />);
    expect(screen.getByTestId('div-alert')).toHaveStyle(
      `left: ${remify(-(formHex.diameter + rgbHslWrapper.padding))}`,
    );
  });
  test('g', () => {
    render(<DivAlert {...mockProps} g data-testid="div-alert" />);
    expect(screen.getByTestId('div-alert')).toHaveStyle(
      `left: ${remify(
        -(formHex.diameter + rgbHslWrapper.padding + formNumberSmall.diameter),
      )}`,
    );
  });
  test('b', () => {
    render(<DivAlert {...mockProps} b data-testid="div-alert" />);
    expect(screen.getByTestId('div-alert')).toHaveStyle(
      `left: ${remify(
        -(
          formHex.diameter +
          rgbHslWrapper.padding +
          formNumberSmall.diameter * 2
        ),
      )}`,
    );
  });
});

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<DivAlert {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgba(254,254,50,0.9);
        color: rgb(10,10,10);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        left: 0.3125rem;
        padding-bottom: 1.0969rem;
        padding-left: 1.0969rem;
        padding-right: 1.0969rem;
        padding-top: 1.0969rem;
        position: absolute;
        top: 90%;
        width: 18.9375rem;
        z-index: 1;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          left: 0.375rem;
          padding-bottom: 1.3163rem;
          padding-left: 1.3163rem;
          padding-right: 1.3163rem;
          padding-top: 1.3163rem;
          width: 22.725rem;
        }
      }

      @media only screen and (min-width:57.6625rem) {
        .c0 {
          left: 90%;
          position: absolute;
          top: 90%;
          width: auto;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Paragraph', () => {
    const {container} = render(<DivAlert.Paragraph />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 0.8929rem;
        font-weight: 300;
        line-height: 1.365;
        text-align: left;
        -webkit-transform: translateX(-0.08em);
        -ms-transform: translateX(-0.08em);
        transform: translateX(-0.08em);
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

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      <div>
        <p
          class="DivAlert__Paragraph-dfxf8u-1 c0"
          role="alert"
        />
      </div>
    `);
  });
});
