import React from 'react';
import {render, screen} from '@testing-library/react';

import Paragraph from './Paragraph';

const mockProps = {};

test('right-aligns the text if the rightAligned prop is provided', () => {
  render(<Paragraph rightAligned {...mockProps} data-testid="paragraph" />);
  expect(screen.getByTestId('paragraph')).toHaveStyle('text-align: right');
});

test('renders UI correctly:', () => {
  const {container} = render(<Paragraph {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins',Verdana,sans-serif;
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      margin-bottom: -0.28em;
      -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
      -ms-transform: translateX(-0.08em) translateY(-0.1375em);
      transform: translateX(-0.08em) translateY(-0.1375em);
      text-align: left;
    }

    @media only screen and (min-width:45.5rem) {
      .c0 {
        font-size: 1.0714rem;
      }
    }

    <div>
      <p
        class="c0"
      />
    </div>
  `);
});
