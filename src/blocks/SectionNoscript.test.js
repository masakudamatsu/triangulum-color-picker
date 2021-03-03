import React from 'react';
import {render} from '@testing-library/react';

import SectionNoscript from './SectionNoscript';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<SectionNoscript {...mockProps} />);
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
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        background-color: rgba(254,254,50,0.9);
        color: rgb(10,10,10);
        padding: 1.0969rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          padding: 1.3163rem;
        }
      }

      <div>
        <section
          class="c0"
        />
      </div>
    `);
  });
  test('Link', () => {
    const {container} = render(<SectionNoscript.Link {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background: rgb(65,65,65);
        background: linear-gradient( to bottom,transparent 50%,currentColor 50%,currentColor );
        background-position: 0 calc(0.4em + 0.7em);
        background-repeat: no-repeat;
        background-size: 100% 2px;
        color: inherit;
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-shadow: 0.03em 0 rgb(10,10,10),-0.03em 0 rgb(10,10,10),0 0.03em rgb(10,10,10),0 -0.03em rgb(10,10,10);
      }

      .c0:visited {
        background: rgb(65,65,65);
        background: linear-gradient( to bottom,transparent 50%,currentColor 50%,currentColor );
        color: inherit;
      }

      .c0:focus,
      .c0:hover {
        background: rgb(65,65,65);
        outline: none;
        text-shadow: none;
      }

      .c0:active {
        background: none;
      }

      .c0:visited:focus,
      .c0:visited:hover {
        background: rgb(65,65,65);
        outline: none;
        text-shadow: none;
      }

      .c0:visited:active {
        background: none;
      }

      .c1 {
        text-shadow: 0.03em 0 rgba(254,254,50,0.9),-0.03em 0 rgba(254,254,50,0.9),0 0.03em rgba(254,254,50,0.9),0 -0.03em rgba(254,254,50,0.9);
      }

      .c1:focus,
      .c1:hover,
      .c1:visited:focus,
      .c1:visited:hover {
        background: rgb(146,146,3);
      }

      <div>
        <a
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Paragraph', () => {
    const {container} = render(<SectionNoscript.Paragraph {...mockProps} />);
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
        height: auto;
        width: 18.9375rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          height: auto;
          width: 22.725rem;
        }
      }

      <div>
        <p
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Spacer', () => {
    const {container} = render(<SectionNoscript.Spacer {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.0969rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 1.3163rem;
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
