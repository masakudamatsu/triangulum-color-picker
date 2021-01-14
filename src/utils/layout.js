import {css} from 'styled-components';

import {breakpoint, scale} from 'src/utils/typography';

export const inputText = {
  borderWidth: {
    active: 2,
    inactive: 1,
  },
  paddingBottom: 20,
  paddingLeft: 10,
  paddingTop: 20,
};

export const boxSize = {
  formColorCode: responsiveBoxSize(303),
  formHex: responsiveBoxSize(109, 109),
  formNumberSmall: responsiveBoxSize(48, 48),
  formNumberLargeWrapper: responsiveBoxSize(343),
  formWrapper: responsiveBoxSize(303),
  rgbHslWrapper: responsiveBoxSize(194),
};

function responsiveBoxSize(baseWidth, baseHeight) {
  return css`
    height: ${baseHeight ? `${baseHeight.toFixed()}px` : `auto`};
    width: ${baseWidth.toFixed()}px;
    @media only screen and (min-width: ${breakpoint.toFixed()}px) {
      height: ${baseHeight ? `${(baseHeight * scale).toFixed()}px` : `auto`};
      width: ${(baseWidth * scale).toFixed()}px;
    }
  `;
}
