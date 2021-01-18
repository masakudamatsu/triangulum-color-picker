import {css} from 'styled-components';

// Convert px in number into rem in string
function remify(px) {
  const oneRemInPx = 16;
  function stringify(number) {
    return `${number.toFixed(4)}rem`;
  }
  return stringify(px / oneRemInPx);
}

// Font metrics
const poppins = {
  light: {
    unitsPerEm: 1000,
    xHeight: 546,
    capHeight: 700,
  },
  thin: {
    unitsPerEm: 1000,
    xHeight: 540,
    capHeight: 702,
  },
}; // Measured with https://opentype.js.org/font-inspector.html

// Breakpoint for font-size (following Medium.com)
export const breakpoint = 728;
export const scale = 1.2;

export const capheight = {
  small: 10,
  medium: 15,
  large: 20,
  number: 60,
  percent: 20,
};

function capHeightToBe(px, fontMetrics) {
  const capHeightToFontSize = capHeight =>
    (capHeight / fontMetrics.capHeight) * fontMetrics.unitsPerEm;
  return capHeightToFontSize(px);
}

// Type scale
export const typescale = {
  small: css`
    font-family: 'Poppins';
    font-size: ${remify(capHeightToBe(capheight.small, poppins.light))};
    font-weight: 300;
    line-height: 1;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${remify(
        capHeightToBe(capheight.small * scale, poppins.light),
      )};
    }
  `,
  medium: css`
    font-family: 'Poppins';
    font-size: ${remify(capHeightToBe(capheight.medium, poppins.light))};
    font-weight: 300;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${remify(
        capHeightToBe(capheight.medium * scale, poppins.light),
      )};
    }
  `,
  large: css`
    font-family: 'Poppins';
    font-size: ${remify(capHeightToBe(capheight.large, poppins.light))};
    font-weight: 300;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${remify(
        capHeightToBe(capheight.large * scale, poppins.light),
      )};
    }
  `,
  number: css`
    font-family: 'Poppins';
    font-size: ${remify(capHeightToBe(capheight.number, poppins.thin))};
    font-weight: 100;
    line-height: 1;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${remify(
        capHeightToBe(capheight.number * scale, poppins.thin),
      )};
    }
  `,
  percent: css`
    font-family: 'Poppins';
    font-size: ${remify(capHeightToBe(capheight.percent, poppins.thin))};
    font-weight: 100;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${remify(
        capHeightToBe(capheight.percent * scale, poppins.thin),
      )};
    }
  `,
};

export const textcrop = {
  small: css`
    margin-bottom: -0.28em;
    transform: translateX(-0.08em) translateY(-0.1375em);
  `,
  smallCenterAligned: css`
    margin-bottom: -0.28em;
    transform: translateY(-0.1375em);
  `,
  large: css`
    margin-bottom: -0.771em;
    transform: translateX(-0.065em) translateY(-0.37em);
  `,
  number: css`
    margin-bottom: -0.3158em;
    transform: translateY(-0.1286em);
  `,
  percent: css`
    transform: translateY(0.46em);
  `, // for percent, cropping bottom matters to be bottom-aligned with chroma/luminance values
};
