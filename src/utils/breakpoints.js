import {
  canvas,
  formColorCode,
  formNumberLarge,
  page,
  scale,
} from './designSpecs';

export const mediaQuery = {
  canvas: `(min-width: 535px)`,
  font: `(min-width: 728px)`,
  threeColumns: `(min-width: ${(
    canvas.width.large +
    formColorCode.width * scale +
    formNumberLarge.width * scale +
    page.whitespace.betweenComponents * 2 +
    page.whitespace.sideMargin * 2
  ).toFixed()}px) and (min-height: ${(
    canvas.width.large +
    page.whitespace.topMargin +
    page.whitespace.bottomMargin
  ).toFixed()}px)`,
};
