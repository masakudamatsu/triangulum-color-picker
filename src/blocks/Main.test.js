import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Main from './Main';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Main {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      @media only screen and (min-width:943px) {
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

      @media only screen and (min-width:943px) and (min-height:918px) {
        .c0 {
          height: 100vh;
        }
      }

      @media only screen and (min-width:1326px) {
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

      @media only screen and (min-width:1326px) and (min-height:632px) {
        .c0 {
          height: 100vh;
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

      @media only screen and (min-width:943px) {
        .c0 {
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          height: 841px;
          width: 943px;
        }
      }

      @media only screen and (min-width:1326px) {
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
          height: 552px;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
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

      @media only screen and (min-width:1326px) {
        .c0 {
          display: block;
          height: 100vh;
          width: 20px;
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
        display: none;
      }

      @media only screen and (min-width:943px) {
        .c0 {
          display: block;
          height: 40px;
          width: 100%;
        }
      }

      @media only screen and (min-width:1326px) {
        .c0 {
          display: block;
          height: 40px;
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
  test('MarginSide', () => {
    const {container} = render(<Main.MarginSide {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: none;
      }

      @media only screen and (min-width:1326px) {
        .c0 {
          display: block;
          height: 100vh;
          width: 40px;
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
        display: none;
      }

      @media only screen and (min-width:943px) {
        .c0 {
          display: block;
          height: 40px;
          width: 100%;
        }
      }

      @media only screen and (min-width:1326px) {
        .c0 {
          display: block;
          height: 40px;
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
