import {css} from 'styled-components';

import {capheight, footer, scale} from './designSpecs';
import {mediaQuery} from './breakpoints';
import {poppins} from './fontMetrics';
import remify from './remify';

function capHeightToBe(px, fontMetrics) {
  const capHeightToFontSize = capHeight =>
    (capHeight / fontMetrics.capHeight) * fontMetrics.unitsPerEm;
  return capHeightToFontSize(px);
}

function xHeightToBe(px, fontMetrics) {
  const xHeightToFontSize = xHeight =>
    (xHeight / fontMetrics.xHeight) * fontMetrics.unitsPerEm;
  return xHeightToFontSize(px);
}

function lineHeightToBe(xHeightPx, spaceBetweenPx, fontMetrics) {
  const lineHeight = xHeightPx + spaceBetweenPx;
  return lineHeight / xHeightToBe(xHeightPx, fontMetrics);
}

// Type scale
export const typescale = {
  small: css`
    font-family: 'Poppins', Verdana, sans-serif;
    font-size: ${remify(capHeightToBe(capheight.small, poppins.light))};
    font-weight: 300;
    line-height: 1;
    @media only screen and ${mediaQuery.font} {
      font-size: ${remify(
        capHeightToBe(capheight.small * scale, poppins.light),
      )};
    }
  `,
  medium: css`
    font-family: 'Poppins', Verdana, sans-serif;
    font-size: ${remify(capHeightToBe(capheight.medium, poppins.light))};
    font-weight: 300;
    @media only screen and ${mediaQuery.font} {
      font-size: ${remify(
        capHeightToBe(capheight.medium * scale, poppins.light),
      )};
    }
  `,
  large: css`
    font-family: 'Poppins', Verdana, sans-serif;
    font-size: ${remify(capHeightToBe(capheight.large, poppins.light))};
    font-weight: 300;
    @media only screen and ${mediaQuery.font} {
      font-size: ${remify(
        capHeightToBe(capheight.large * scale, poppins.light),
      )};
    }
  `,
  number: css`
    font-family: 'Poppins', Verdana, sans-serif;
    font-size: ${remify(capHeightToBe(capheight.number, poppins.thin))};
    font-weight: 100;
    line-height: 1;
    @media only screen and ${mediaQuery.font} {
      font-size: ${remify(
        capHeightToBe(capheight.number * scale, poppins.thin),
      )};
    }
  `,
  percent: css`
    font-family: 'Poppins', Verdana, sans-serif;
    font-size: ${remify(capHeightToBe(capheight.percent, poppins.thin))};
    font-weight: 100;
    @media only screen and ${mediaQuery.font} {
      font-size: ${remify(
        capHeightToBe(capheight.percent * scale, poppins.thin),
      )};
    }
  `,
  footer: css`
    font-family: 'Poppins', Verdana, sans-serif;
    font-size: ${remify(xHeightToBe(footer.xheight, poppins.light))};
    font-weight: 300;
    line-height: ${lineHeightToBe(
      footer.xheight,
      footer.betweenLine,
      poppins.light,
    )};
    @media only screen and ${mediaQuery.font} {
      font-size: ${remify(xHeightToBe(footer.xheight * scale, poppins.light))};
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
  medium: css`
    margin-bottom: -0.771em;
    transform: translateX(-0.065em) translateY(-0.37em);
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
  footer: css`
    margin-bottom: -0.28em;
    transform: translateY(-0.1375em);
  `,
};
