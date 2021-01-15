import {css} from 'styled-components';

import {breakpoint, capheight, scale} from 'src/utils/typography';

export const input = {
  borderWidth: {
    active: 2,
    inactive: 1,
  },
};
export const formColorCode = {
  capheight: {
    label: capheight.small,
    inputValue: capheight.large,
  },
  whitespace: {
    aboveLabel: 10,
    aboveInputValue: 20,
    belowInputValue: 20,
    left: 10,
  },
};

export const formHex = {
  capheight: {
    label: capheight.small,
    inputValue: capheight.medium,
  },
  whitespace: {
    aboveLabel: 18,
    aboveInputValue: 19,
    belowInputValue: 47,
  },
  get diameter() {
    return (
      this.whitespace.aboveLabel +
      this.capheight.label +
      this.whitespace.aboveInputValue +
      this.capheight.inputValue +
      this.whitespace.belowInputValue
    );
  },
};

export const boxSize = {
  formColorCode: responsiveBoxSize(303),
  formHex: responsiveBoxSize(formHex.diameter, formHex.diameter),
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
