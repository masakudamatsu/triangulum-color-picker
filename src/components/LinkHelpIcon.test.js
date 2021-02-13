import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import LinkHelpIcon from './LinkHelpIcon';

const mockProps = {
  href: 'https://triangulum.netlify.app',
  linkTitle: 'Link for learning what chroma is',
};

test('renders UI correctly', () => {
  const {container} = render(<LinkHelpIcon {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      fill: rgb(10,10,10);
      stroke: rgb(255,255,255);
      stroke-width: 1.5;
      -webkit-transform: translate(0,0.14em);
      -ms-transform: translate(0,0.14em);
      transform: translate(0,0.14em);
      width: 1.5625rem;
    }

    .c0:focus,
    .c0:hover {
      fill: rgb(255,255,255);
      stroke: rgb(10,10,10);
    }

    .c0:active {
      fill: rgb(10,10,10);
      stroke: rgb(255,255,255);
    }

    @media only screen and (min-width:45.5rem) {
      .c0 {
        width: 1.875rem;
      }
    }

    <div>
      <a
        href="https://triangulum.netlify.app"
        rel="help"
        title="Link for learning what chroma is"
      >
        <svg
          class="c0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>
            Link for learning what chroma is
          </title>
          <circle
            cx="12"
            cy="12"
            r="9"
          />
          <line
            x1="12"
            x2="12"
            y1="16"
            y2="18"
          />
          <path
            d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"
          />
        </svg>
      </a>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<LinkHelpIcon {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
