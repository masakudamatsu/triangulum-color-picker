import {
  canvas,
  flexbox,
  footer,
  formColorCode,
  formNumberLarge,
  header,
  page,
} from './designSpecs';

import {scale} from 'src/utils/specFont';

import remify from './remify';

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
    page.whitespace.bottomMargin +
    header.borderBottomWidth +
    footer.height * scale,
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
    page.whitespace.bottomMargin +
    header.borderBottomWidth +
    footer.height * scale,
};

export const mediaQuery = {
  font: `(min-width: ${remify(728)})`,
  threeColumns: `(min-width: ${remify(threeColumns.minWidth)})`,
  threeColumnsTall: `(min-width: ${remify(
    threeColumns.minWidth,
  )}) and (min-height: ${remify(threeColumns.minHeight)})`,
  twoColumns: `(min-width: ${remify(twoColumns.minWidth)})`,
  twoColumnsTall: `(min-width: ${remify(
    twoColumns.minWidth,
  )}) and (min-height: ${remify(twoColumns.minHeight)})`,
};
