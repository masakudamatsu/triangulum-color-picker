import {
  canvas,
  flexbox,
  formColorCode,
  formNumberLarge,
  header,
  page,
  rgbHslWrapper,
  scale,
} from './designSpecs';

export const threeColumns = {
  minWidth:
    canvas.width.small +
    formColorCode.width * scale +
    formNumberLarge.width * scale +
    page.whitespace.betweenComponents * 2 +
    page.whitespace.sideMargin * 2,
  minHeight:
    header.height * scale +
    header.borderBottomWidth +
    formNumberLarge.height * scale * 2 +
    page.whitespace.topMargin +
    page.whitespace.bottomMargin,
};

export const twoColumns = {
  minWidth:
    canvas.width.small +
    formNumberLarge.width * scale +
    page.whitespace.sideMargin * 2,
  minHeight:
    header.height * scale +
    header.borderBottomWidth +
    flexbox.height.twoColumns +
    page.whitespace.topMargin +
    page.whitespace.bottomMargin,
};

export const mediaQuery = {
  canvas: `(min-width: 535px)`,
  font: `(min-width: 728px)`,
  threeColumns: `(min-width: ${threeColumns.minWidth.toFixed()}px)`,
  threeColumnsTall: `(min-width: ${threeColumns.minWidth.toFixed()}px) and (min-height: ${threeColumns.minHeight.toFixed()}px)`,
  twoColumns: `(min-width: ${twoColumns.minWidth.toFixed()}px)`,
  twoColumnsTall: `(min-width: ${twoColumns.minWidth.toFixed()}px) and (min-height: ${twoColumns.minHeight.toFixed()}px)`,
};
