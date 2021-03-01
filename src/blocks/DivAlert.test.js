import React from 'react';
import {render} from '@testing-library/react';

import DivAlert from './DivAlert';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<DivAlert {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(254,254,50);
        color: rgb(10,10,10);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        left: 0;
        padding: 1.0969rem 0 1.0969rem;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 1;
      }

      @media only screen and (min-width:57.6625rem) {
        .c0 {
          left: 90%;
          padding-left: 1.0969rem;
          padding-right: 1.0969rem;
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

      .c1 {
        width: 18.9375rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          width: 22.725rem;
        }
      }

      <div>
        <p
          class="c0 c1"
          role="alert"
        />
      </div>
    `);
  });
});
