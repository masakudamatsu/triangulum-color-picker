import {css} from 'styled-components';

import {scale} from './specFont';
import {mediaQuery} from './breakpoints';
import remify from './remify';

export function fontCssGenerator(typeface) {
  return css`
    font-family: ${typeface.fontMetrics.fontFamily};
    font-size: ${remify(
      capHeightToBe(typeface.capHeight, typeface.fontMetrics),
    )};
    font-weight: ${typeface.fontMetrics.fontWeight};
    line-height: ${lineHeightToBe(typeface)};
    @media only screen and ${mediaQuery.font} {
      font-size: ${remify(
        capHeightToBe(typeface.capHeight * scale, typeface.fontMetrics),
      )};
    }
    /* Text Crop (see https://text-crop.eightshapes.com/) */
    &::before,
    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }
    &::before {
      margin-bottom: ${typeface.textCropEm.top}em;
    }
    &::after {
      margin-top: ${typeface.textCropEm.bottom}em;
    }
  `;
}

// helper functions

function capHeightToBe(capHeight, fontMetrics) {
  const fontSizeToCapHeightRatio =
    fontMetrics.unitsPerEm / fontMetrics.capHeight;
  return capHeight * fontSizeToCapHeightRatio;
}

function xHeightToBe(xHeight, fontMetrics) {
  const fontSizeToXHeightRatio = fontMetrics.unitsPerEm / fontMetrics.xHeight;
  return xHeight * fontSizeToXHeightRatio;
}

function lineHeightToBe(typeface) {
  const lineHeightToXHeightRatio =
    (typeface.xHeightRatio + typeface.betweenLinesRatio) /
    typeface.xHeightRatio;
  return (
    (typeface.fontMetrics.xHeight * lineHeightToXHeightRatio) /
    typeface.fontMetrics.unitsPerEm
  );
}
