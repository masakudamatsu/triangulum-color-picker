import {css} from 'styled-components';

import {breakpoint, capheight, scale} from './typography';

import {mediaQuery} from './breakpoints';

export const input = {
  borderWidth: {
    active: 2,
    inactive: 1,
  },
};

// Vertical spacing

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

export const formNumberSmall = {
  capheight: {
    label: capheight.small,
    inputValue: capheight.medium,
  },
  whitespace: {
    aboveLabel: 5,
    aboveInputValue: 6,
    belowInputValue: 12,
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

export const formNumberLarge = {
  capheight: {
    h2: capheight.large,
    paragraph: capheight.small,
    output: capheight.number,
  },
  whitespace: {
    padding: 40,
    belowH2: 10,
    aboveOutput: 20,
    belowOutput: 20,
  },
  get height() {
    return (
      this.whitespace.paddingTop +
      this.capheight.h2 +
      this.whitespace.belowH2 +
      this.capheight.paragraph +
      this.whitespace.aboveOutput +
      this.capheight.output +
      this.whitespace.belowOutput +
      this.capheight.paragraph +
      this.whitespace.paddingBottom
    );
  },
};

// Horizontal spacing

const triangleWidth = 303;

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
