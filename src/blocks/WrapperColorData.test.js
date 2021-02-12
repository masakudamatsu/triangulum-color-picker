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
        padding: 2.5rem;
        height: auto;
        width: 21.4375rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: auto;
          width: 25.725rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          padding: 3rem;
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
