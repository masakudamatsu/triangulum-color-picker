import React from 'react';
import {render, screen} from '@testing-library/react';

import Header from './Header';
import {header} from 'src/utils/specLayout';
import remify from 'src/utils/remify';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Header {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(10,10,10);
        border-bottom: 1px solid rgb(100,100,100);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 2.875rem;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        z-index: 1;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 3.4375rem;
        }
      }

      <div>
        <header
          class="c0"
        />
      </div>
    `);
  });
  test('H1', () => {
    const {container} = render(<Header.H1 {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 1.3393rem;
        font-weight: 300;
        line-height: 1.274;
        -webkit-transform: translateX(-0.065em);
        -ms-transform: translateX(-0.065em);
        transform: translateX(-0.065em);
      }

      .c0::before,
      .c0::after {
        content: '';
        display: block;
        height: 0;
        width: 0;
      }

      .c0::before {
        margin-bottom: -0.304em;
      }

      .c0::after {
        margin-top: -0.3325em;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.6071rem;
        }
      }

      <div>
        <h1
          class="c0"
        />
      </div>
    `);
  });
  test('Img', () => {
    const {container} = render(<Header.Img {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: auto;
        width: 100%;
      }

      <div>
        <img
          class="c0"
        />
      </div>
    `);
  });
  test('InnerWrapper', () => {
    const {container} = render(<Header.InnerWrapper {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        width: 18.9375rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 22.725rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('OuterWrapper', () => {
    const {container} = render(<Header.OuterWrapper {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
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
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          padding-left: 4rem;
          padding-right: 2.5rem;
          width: 57.6625rem;
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
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          padding-left: 2.5rem;
          padding-right: 2.5rem;
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
  test('WrapperH1', () => {
    const {container} = render(<Header.WrapperH1 {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-bottom: 0.9375rem;
        padding-top: 0.9375rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          padding-bottom: 1.125rem;
          padding-top: 1.125rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('WrapperLogo', () => {
    const {container} = render(<Header.WrapperLogo {...mockProps} />);
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
        height: 100%;
        padding-right: 0.625rem;
        width: 2.5rem;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});

describe('changes style by props values', () => {
  test('show', () => {
    render(<Header show {...mockProps} data-testid="header" />);
    expect(screen.getByTestId('header')).toHaveStyle(
      `
        transform: translate(0,0);
        transition: transform ${header.speed.show} cubic-bezier(0.0,0.0,0.2,1);
      `,
    );
  });
  test('hide', () => {
    render(<Header hide {...mockProps} data-testid="header" />);
    expect(screen.getByTestId('header')).toHaveStyle(
      `
        transform: translate(0,-${remify(header.height)});
        transition: transform ${header.speed.hide} cubic-bezier(0.0,0.0,0.2,1);
      `,
    );
  });
});
