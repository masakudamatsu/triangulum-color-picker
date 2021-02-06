import React from 'react';
import {render} from '@testing-library/react';

import Span from './Span';

const mockProps = {};

describe('renders UI correctly', () => {
  test('with the colon prop', () => {
    const {container} = render(
      <Span colon {...mockProps}>
        :
      </Span>,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        bottom: 0.1em;
        right: 0.2em;
      }

      <div>
        <span
          class="c0"
        >
          :
        </span>
      </div>
    `);
  });
  test('with the dash prop', () => {
    const {container} = render(
      <Span dash {...mockProps}>
        –
      </Span>,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        top: 0.05em;
      }

      <div>
        <span
          class="c0"
        >
          –
        </span>
      </div>
    `);
  });
  test('with the ratio prop', () => {
    const {container} = render(
      <Span ratio {...mockProps}>
        2:1
      </Span>,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-letter-spacing: 0.1em;
        -moz-letter-spacing: 0.1em;
        -ms-letter-spacing: 0.1em;
        letter-spacing: 0.1em;
      }

      <div>
        <span
          class="c0"
        >
          2:1
        </span>
      </div>
    `);
  });
});
