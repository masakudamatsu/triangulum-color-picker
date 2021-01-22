import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Header from './Header';
import {header} from 'src/utils/designSpecs';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Header {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(10,10,10);
        border-bottom: 1px solid rgb(96,96,96);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 46px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        z-index: 1;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 55px;
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
        font-family: 'Poppins';
        font-size: 1.3393rem;
        font-weight: 300;
        margin-bottom: -0.771em;
        -webkit-transform: translateX(-0.065em) translateY(-0.37em);
        -ms-transform: translateX(-0.065em) translateY(-0.37em);
        transform: translateX(-0.065em) translateY(-0.37em);
      }

      @media only screen and (min-width:728px) {
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
        max-width: 100%;
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
        width: 303px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          width: 363.59999999999997px;
        }
      }

      @media only screen and (min-width:1326px) {
        .c0 {
          padding-left: 40px;
          width: 1326.1999999999998px;
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
        padding-bottom: 15px;
        padding-top: 15px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-bottom: 18px;
          padding-top: 18px;
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
        padding-right: 10px;
        width: 40px;
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
        transition: transform ${header.speed.show};
      `,
    );
  });
  test('hide', () => {
    render(<Header hide {...mockProps} data-testid="header" />);
    expect(screen.getByTestId('header')).toHaveStyle(
      `
        transform: translate(0,-${header.height}px);
        transition: transform ${header.speed.hide};
      `,
    );
  });
});
