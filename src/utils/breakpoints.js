import {threeColumns, twoColumns} from './specLayout';

import {breakpointForFont} from 'src/utils/specFont';

import remify from './remify';

export const mediaQuery = {
  font: `(min-width: ${remify(breakpointForFont)})`,
  threeColumns: `(min-width: ${remify(threeColumns.minWidth)})`,
  threeColumnsTall: `(min-width: ${remify(
    threeColumns.minWidth,
  )}) and (min-height: ${remify(threeColumns.minHeight)})`,
  twoColumns: `(min-width: ${remify(twoColumns.minWidth)})`,
  twoColumnsTall: `(min-width: ${remify(
    twoColumns.minWidth,
  )}) and (min-height: ${remify(twoColumns.minHeight)})`,
};
