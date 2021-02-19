import {
  canvas,
  flexbox,
  footer,
  formColorCode,
  formNumberLarge,
  header,
  page,
  threeColumns,
  twoColumns,
} from './designSpecs';

import {scale} from 'src/utils/specFont';

import remify from './remify';

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
