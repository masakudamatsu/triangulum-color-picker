import React from 'react';
import {render} from '@testing-library/react';

import SectionColorPalette from './SectionColorPalette';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(<SectionColorPalette {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    @media only screen and (min-width:57.6625rem) {
      .c0 {
        -webkit-order: 1;
        -ms-flex-order: 1;
        order: 1;
      }
    }

    @media only screen and (min-width:82.8875rem) {
      .c0 {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
      }
    }

    <div>
      <section
        class="c0"
      />
    </div>
  `);
});
