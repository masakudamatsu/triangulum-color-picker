import {css} from 'styled-components';

// # of px for 1rem
const oneRemPx = 16;

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

function capHeightToBe(px, fontMetrics) {
  const capHeightToFontSize = capHeight =>
    (capHeight / fontMetrics.capHeight) * fontMetrics.unitsPerEm;
  return capHeightToFontSize(px);
}

// Type scale
export const typescale = {
  small: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(10, poppins.light) / oneRemPx).toFixed(4)}rem;
    font-weight: 300;
    line-height: 1;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${(
        capHeightToBe(10 * scale, poppins.light) / oneRemPx
      ).toFixed(4)}rem;
    }
  `,
  medium: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(15, poppins.light) / oneRemPx).toFixed(4)}rem;
    font-weight: 300;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${(
        capHeightToBe(15 * scale, poppins.light) / oneRemPx
      ).toFixed(4)}rem;
    }
  `,
  large: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(20, poppins.light) / oneRemPx).toFixed(4)}rem;
    font-weight: 300;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${(
        capHeightToBe(20 * scale, poppins.light) / oneRemPx
      ).toFixed(4)}rem;
    }
  `,
  number: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(60, poppins.thin) / oneRemPx).toFixed(4)}rem;
    font-weight: 100;
    line-height: 1;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${(capHeightToBe(60 * scale, poppins.thin) / oneRemPx).toFixed(
        4,
      )}rem;
    }
  `,
  percent: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(20, poppins.thin) / oneRemPx).toFixed(4)}rem;
    font-weight: 100;
    @media only screen and (min-width: ${breakpoint.toString()}px) {
      font-size: ${(capHeightToBe(20 * scale, poppins.thin) / oneRemPx).toFixed(
        4,
      )}rem;
    }
  `,
};

export const textcrop = {
  small: css`
    margin-bottom: -0.28em;
    transform: translateX(-0.08em) translateY(-0.1375em);
  `,
  large: css`
    margin-bottom: -0.771em;
    transform: translateX(-0.065em) translateY(-0.37em);
  `,
  percent: css`
    margin-bottom: -0.771em;
    transform: translateX(-0.065em) translateY(-0.37em);
  `,
};
