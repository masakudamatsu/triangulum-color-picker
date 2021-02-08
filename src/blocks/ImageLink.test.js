import React from 'react';
import {render} from '@testing-library/react';

import ImageLink from './ImageLink';

const mockProps = {};

describe('renders UI correctly', () => {
  test('when no prop is provided', () => {
    const {container} = render(<ImageLink {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.875rem;
        width: 1.875rem;
        display: none;
      }

      @media only screen and (min-width:57.6625rem) {
        .c0 {
          display: inline-block;
        }
      }

      @media only screen and (min-width:82.8875rem) {
        .c0 {
          display: inline-block;
        }
      }

      <div>
        <a
          class="c0"
        />
      </div>
    `);
  });
  test('when footer prop is provided', () => {
    const {container} = render(<ImageLink {...mockProps} footer />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.875rem;
        width: 1.875rem;
        display: inline-block;
      }

      @media only screen and (min-width:57.6625rem) {
        .c0 {
          display: none;
        }
      }

      @media only screen and (min-width:82.8875rem) {
        .c0 {
          display: none;
        }
      }

      <div>
        <a
          class="c0"
        />
      </div>
    `);
  });
});
