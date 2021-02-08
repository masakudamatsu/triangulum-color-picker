import React from 'react';
import {render} from '@testing-library/react';

import Svg from './Svg';

describe('renders UI correctly', () => {
  test('topLeft', () => {
    const {container} = render(<Svg position="topLeft" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: absolute;
        width: 1.875rem;
        top: 0;
        left: 0;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 2.25rem;
        }
      }

      <div>
        <svg
          class="c0"
        />
      </div>
    `);
  });
  test('topLeft large', () => {
    const {container} = render(<Svg large position="topLeft" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: absolute;
        width: 3.75rem;
        top: 0;
        left: 0;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 4.5rem;
        }
      }

      <div>
        <svg
          class="c0"
        />
      </div>
    `);
  });
  test('bottomRight', () => {
    const {container} = render(<Svg position="bottomRight" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: absolute;
        width: 1.875rem;
        bottom: 0;
        right: 0;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 2.25rem;
        }
      }

      <div>
        <svg
          class="c0"
        />
      </div>
    `);
  });
  test('bottomRight large', () => {
    const {container} = render(<Svg large position="bottomRight" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: absolute;
        width: 3.75rem;
        bottom: 0;
        right: 0;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 4.5rem;
        }
      }

      <div>
        <svg
          class="c0"
        />
      </div>
    `);
  });
});
