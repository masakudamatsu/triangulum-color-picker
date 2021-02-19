import {css} from 'styled-components';

import {mediaQuery} from './breakpoints';
import remify from './remify';
import {scale} from 'src/utils/specFont';

export function responsiveBoxSize(baseWidth, baseHeight) {
  return css`
    height: ${baseHeight ? remify(baseHeight) : `auto`};
    width: ${remify(baseWidth)};
    @media only screen and ${mediaQuery.font} {
      height: ${baseHeight ? remify(baseHeight * scale) : `auto`};
      width: ${remify(baseWidth * scale)};
    }
  `;
}
