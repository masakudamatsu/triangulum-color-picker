import getCanvasMetrics from './getCanvasMetrics';

const canvasSmall = getCanvasMetrics(3);
const canvasLarge = getCanvasMetrics(5);
export const canvas = {
  width: {
    small: canvasSmall.canvasWidth,
    large: canvasLarge.canvasWidth,
  },
};
// Scale factor to enlarge fonts beyond the tablet screen width of 728px
export const scale = 1.2;
export const triangleWidth = 303;

export const capheight = {
  small: 10,
  medium: 15,
  large: 20,
  number: 60,
  percent: 20,
};

export const cross = {
  width: {
    default: 30,
    large: 60,
  },
};
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
  get height() {
    return (
      this.whitespace.aboveLabel +
      this.capheight.label +
      this.whitespace.aboveInputValue +
      this.capheight.inputValue +
      this.whitespace.belowInputValue +
      input.borderWidth.inactive * 2
    );
  },
  width: triangleWidth,
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

export const formNumberLarge = {
  capheight: {
    h2: capheight.large,
    paragraph: capheight.small,
    output: capheight.number,
  },
  whitespace: {
    padding: cross.width.large * (2 / 3),
    belowH2: 10,
    aboveOutput: 20,
    belowOutput: 20,
  },
  get height() {
    return (
      this.whitespace.padding * 2 +
      this.capheight.h2 +
      this.whitespace.belowH2 +
      this.capheight.paragraph +
      this.whitespace.aboveOutput +
      this.capheight.output +
      this.whitespace.belowOutput +
      this.capheight.paragraph
    );
  },
  get width() {
    return triangleWidth + this.whitespace.padding;
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

export const rgbHslWrapper = {
  padding: cross.width.default * (2 / 3),
  whitespace: {
    betweenRgbAndHsl: 10,
  },
  get height() {
    return (
      this.padding * 2 +
      formNumberSmall.diameter * 2 +
      this.whitespace.betweenRgbAndHsl
    );
  },
};

export const page = {
  whitespace: {
    betweenColorCodeAndRgb: 10,
    betweenComponents: 20,
    bottomMargin: 40,
    sideMargin: 40,
    topMargin: 40,
  },
  get height() {
    return (
      (formColorCode.height +
        rgbHslWrapper.height +
        formNumberLarge.height * 2) *
        scale +
      this.whitespace.topMargin +
      this.whitespace.betweenColorCodeAndRgb +
      this.whitespace.bottomMargin
    );
  },
};

export const flexbox = {
  height: {
    twoColumns:
      (formColorCode.height +
        rgbHslWrapper.height +
        formNumberLarge.height * 2 +
        page.whitespace.betweenColorCodeAndRgb) *
      scale,
  },
};
