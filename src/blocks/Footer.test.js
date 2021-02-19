import React from 'react';
import {render} from '@testing-library/react';

import Footer from './Footer';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Footer {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(10,10,10);
        border-top: 1px solid rgb(100,100,100);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
      }

      @media only screen and (min-width:57.6625rem) and (min-height:64.0675rem) {
        .c0 {
          bottom: 0;
          position: fixed;
        }
      }

      @media only screen and (min-width:82.8875rem) and (min-height:46.2175rem) {
        .c0 {
          bottom: 0;
          position: fixed;
        }
      }

      <div>
        <footer
          class="c0"
        />
      </div>
    `);
  });
  test('InnerWrapper', () => {
    const {container} = render(<Footer.InnerWrapper {...mockProps} />);
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
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-bottom: 1.0969rem;
        padding-top: 1.0969rem;
        width: 18.9375rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          padding-bottom: 1.3163rem;
          padding-top: 1.3163rem;
          width: 22.725rem;
        }
      }

      @media only screen and (min-width:57.6625rem) {
        .c0 {
          -webkit-box-pack: end;
          -webkit-justify-content: flex-end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          padding-left: 4rem;
          padding-right: 2.5rem;
          width: 57.6625rem;
        }
      }

      @media only screen and (min-width:82.8875rem) {
        .c0 {
          -webkit-box-pack: end;
          -webkit-justify-content: flex-end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          padding-left: 2.5rem;
          width: 82.8875rem;
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
    const {container} = render(<Footer.Paragraph {...mockProps} />);
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
        color: rgb(173,173,173);
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      <div>
        <p
          class="c0 c1"
        />
      </div>
    `);
  });
});
