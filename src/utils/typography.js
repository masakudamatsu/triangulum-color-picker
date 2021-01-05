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

// Type scale
export const typescale = {
  small: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(10, poppins.light) / oneRemPx).toFixed(4)}rem;
    font-weight: 300;
    line-height: 1;
    margin-bottom: -0.28em;
    transform: translateX(-0.08em) translateY(-0.1375em);
  `,
  medium: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(15, poppins.light) / oneRemPx).toFixed(4)}rem;
    font-weight: 300;
  `,
  large: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(20, poppins.light) / oneRemPx).toFixed(4)}rem;
    font-weight: 300;
    margin-bottom: -0.771em;
    transform: translateX(-0.065em) translateY(-0.37em);
  `,
  number: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(60, poppins.light) / oneRemPx).toFixed(4)}rem;
    font-weight: 100;
    line-height: 1;
  `,
  percent: css`
    font-family: 'Poppins';
    font-size: ${(capHeightToBe(20, poppins.light) / oneRemPx).toFixed(4)}rem;
    font-weight: 100;
    margin-bottom: -0.771em;
    transform: translateX(-0.065em) translateY(-0.37em);
  `,
};

function capHeightToBe(px, fontMetrics) {
  const capHeightToFontSize = capHeight =>
    (capHeight / fontMetrics.capHeight) * fontMetrics.unitsPerEm;
  return capHeightToFontSize(px);
}

// text crop

const textboxSpace = {
  bottom: 0.15,
  top: 0.15,
}; // in em (relative to font-size)

export const textCrop = css`
  margin-bottom: -${textboxSpace.bottom + textboxSpace.top}em; /* Pull up the next element by the sum of top and bottom textbox spaces */
  transform: translateY(
    -${textboxSpace.top}em
  ); /* Move text up by top textbox space */
`;
