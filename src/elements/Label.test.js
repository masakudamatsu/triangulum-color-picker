import React from 'react';
import {render, screen} from '@testing-library/react';

import Label from './Label';
import {color} from 'src/utils/specColor';

const mockProps = {};

describe('Props work as intended', () => {
  test('error', () => {
    render(<Label error data-testid="label" />);
    expect(screen.getByTestId('label')).toHaveStyle(
      `color: ${color.input.onError.replace(/\s/g, '')}`,
    );
  });
});

test('renders UI correctly:', () => {
  const {container} = render(<Label {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins',Verdana,sans-serif;
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1.365;
      color: rgb(255,255,255);
    }

    .c0::before,
    .c0::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c0::before {
      margin-bottom: -0.3165em;
    }

    .c0::after {
      margin-top: -0.4195em;
    }

    @media only screen and (min-width:45.5rem) {
      .c0 {
        font-size: 1.0714rem;
      }
    }

    <div>
      <label
        class="c0"
      />
    </div>
  `);
});
