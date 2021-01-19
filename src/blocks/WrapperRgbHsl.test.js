import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import WrapperRgbHsl from './WrapperRgbHsl';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<WrapperRgbHsl {...mockProps} />);
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
        padding: 20px;
        height: auto;
        width: 194px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: auto;
          width: 233px;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding: 24px;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });

  test('MarginBetweenForms', () => {
    const {container} = render(
      <WrapperRgbHsl.MarginBetweenForms {...mockProps} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 10px;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 12px;
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
