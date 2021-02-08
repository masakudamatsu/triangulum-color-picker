import {css} from 'styled-components';

import {
  formColorCode,
  formHex,
  formNumberLarge,
  formNumberSmall,
  scale,
  triangleWidth,
} from './designSpecs';

import {mediaQuery} from './breakpoints';

import remify from './remify';

export const boxSize = {
  formColorCode: responsiveBoxSize(formColorCode.width),
  formHex: responsiveBoxSize(formHex.diameter, formHex.diameter),
  formNumberSmall: responsiveBoxSize(
    formNumberSmall.diameter,
    formNumberSmall.diameter,
  ),
  formNumberLargeWrapper: responsiveBoxSize(formNumberLarge.width), // 343
  formWrapper: responsiveBoxSize(triangleWidth),
  noscript: responsiveBoxSize(formColorCode.width),
  rgbHslWrapper: responsiveBoxSize(triangleWidth - formHex.diameter), // 194
};

function responsiveBoxSize(baseWidth, baseHeight) {
  return css`
    height: ${baseHeight ? remify(baseHeight) : `auto`};
    width: ${remify(baseWidth)};
    @media only screen and ${mediaQuery.font} {
      height: ${baseHeight ? remify(baseHeight * scale) : `auto`};
      width: ${remify(baseWidth * scale)};
    }
  `;
}
