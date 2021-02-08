import React from 'react';
import {render} from '@testing-library/react';

import Svg from './Svg';

describe('renders UI correctly', () => {
  test('topLeft', () => {
    const {container} = render(<Svg position="topLeft" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: absolute;
        width: 30px;
        top: 0;
        left: 0;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 36px;
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
        width: 60px;
        top: 0;
        left: 0;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 72px;
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
        width: 30px;
        bottom: 0;
        right: 0;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 36px;
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
        width: 60px;
        bottom: 0;
        right: 0;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 72px;
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
