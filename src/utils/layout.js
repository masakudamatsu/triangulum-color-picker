import {css} from 'styled-components';

import {
  capheight,
  formHex,
  formNumberLarge,
  formNumberSmall,
  scale,
  triangleWidth,
} from './designSpecs';

import {mediaQuery} from './breakpoints';

export const boxSize = {
  formColorCode: responsiveBoxSize(triangleWidth),
  formHex: responsiveBoxSize(formHex.diameter, formHex.diameter),
  formNumberSmall: responsiveBoxSize(
    formNumberSmall.diameter,
    formNumberSmall.diameter,
  ),
  formNumberLargeWrapper: responsiveBoxSize(
    triangleWidth + formNumberLarge.whitespace.padding,
  ), // 343
  formWrapper: responsiveBoxSize(triangleWidth),
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
