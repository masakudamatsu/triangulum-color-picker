import {css} from 'styled-components';

import {
  capheight,
  formColorCode,
  formHex,
  formNumberLarge,
  formNumberSmall,
  scale,
  triangleWidth,
} from './designSpecs';

import {mediaQuery} from './breakpoints';

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
    height: ${baseHeight ? `${baseHeight.toFixed()}px` : `auto`};
    width: ${baseWidth.toFixed()}px;
    @media only screen and ${mediaQuery.font} {
      height: ${baseHeight ? `${(baseHeight * scale).toFixed()}px` : `auto`};
      width: ${(baseWidth * scale).toFixed()}px;
    }
  `;
}
