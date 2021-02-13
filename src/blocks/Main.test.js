import React from 'react';
import {render} from '@testing-library/react';

import Main from './Main';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Main {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-top: 2.875rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          padding-top: 3.4375rem;
        }
      }

      @media only screen and (min-width:57.6625rem) {
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
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
      }

      @media only screen and (min-width:57.6625rem) and (min-height:64.0675rem) {
        .c0 {
          height: 100vh;
          padding-top: 0;
        }
      }

      @media only screen and (min-width:82.8875rem) {
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
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
      }

      @media only screen and (min-width:82.8875rem) and (min-height:46.2175rem) {
        .c0 {
          height: 100vh;
          padding-top: 0;
        }
      }

      <div>
        <main
          class="c0"
        />
      </div>
    `);
  });
  test('FlexContainer', () => {
    const {container} = render(<Main.FlexContainer {...mockProps} />);
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
      }

      @media only screen and (min-width:57.6625rem) {
        .c0 {
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          height: 52.6625rem;
          padding: 0 2.5rem;
          width: 57.6625rem;
        }
      }

      @media only screen and (min-width:82.8875rem) {
        .c0 {
          -webkit-align-items: flex-start;
          -webkit-box-align: flex-start;
          -ms-flex-align: flex-start;
          align-items: flex-start;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-flex-wrap: nowrap;
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
          height: 34.5rem;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding: 0 2.5rem;
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
  test('MarginBetweenColumns', () => {
    const {container} = render(<Main.MarginBetweenColumns {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: none;
      }

      @media only screen and (min-width:82.8875rem) {
        .c0 {
          display: block;
          height: 100%;
          width: 1.25rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('MarginBottom', () => {
    const {container} = render(<Main.MarginBottom {...mockProps} />);
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

      @media only screen and (min-width:57.6625rem) {
        .c0 {
          display: block;
          height: 2.5rem;
          width: 100%;
        }
      }

      @media only screen and (min-width:82.8875rem) {
        .c0 {
          display: block;
          height: 2.5rem;
          width: 100%;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('MarginTop', () => {
    const {container} = render(<Main.MarginTop {...mockProps} />);
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

      @media only screen and (min-width:57.6625rem) {
        .c0 {
          height: 2.5rem;
          width: 100%;
        }
      }

      @media only screen and (min-width:82.8875rem) {
        .c0 {
          height: 2.5rem;
          width: 100%;
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
