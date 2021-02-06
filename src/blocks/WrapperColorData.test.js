import React from 'react';
import {render} from '@testing-library/react';

import WrapperColorData from './WrapperColorData';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<WrapperColorData {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="WrapperColorData-q1129h-0"
        />
      </div>
    `);
  });
  test('WrapperSection', () => {
    const {container} = render(
      <WrapperColorData.WrapperSection {...mockProps} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        padding: 40px;
        height: auto;
        width: 343px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: auto;
          width: 412px;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding: 48px;
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
