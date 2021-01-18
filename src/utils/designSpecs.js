// Scale factor to enlarge fonts beyond the tablet screen width of 728px
export const scale = 1.2;

export const capheight = {
  small: 10,
  medium: 15,
  large: 20,
  number: 60,
  percent: 20,
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

export const input = {
  borderWidth: {
    active: 2,
    inactive: 1,
  },
};

export const triangleWidth = 303;
