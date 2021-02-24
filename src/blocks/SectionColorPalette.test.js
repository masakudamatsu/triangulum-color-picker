import React from 'react';
import {render} from '@testing-library/react';

import SectionColorPalette from './SectionColorPalette';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(<SectionColorPalette {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      overflow: hidden;
      width: 100vw;
    }

    @media only screen and (min-width:57.6625rem) {
      .c0 {
        -webkit-order: 1;
        -ms-flex-order: 1;
        order: 1;
        width: auto;
      }
    }

    @media only screen and (min-width:82.8875rem) {
      .c0 {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        width: auto;
      }
    }

    <div>
      <section
        class="c0"
      />
    </div>
  `);
});
