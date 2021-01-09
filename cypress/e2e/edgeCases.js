import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

import colorAnalyzer from 'src/utils/colorAnalyzer';
import {color} from 'src/utils/color';
import getCanvasMetrics from 'src/utils/getCanvasMetrics';

// Construct user data
const [twitterBlue, mcdonaldsRed] = [
  {
    // an example of high-luminance color
    label: 'Twitter Blue',
    hex: '#1ca0f2',
    rgb: 'rgb(28, 160, 242)',
    hsl: 'hsl(203, 89%, 53%)',
    fontColor: color.black,
  },
  {
    // an example of low-luminance color
    label: 'McDonalds Red',
    hex: '#c00c0c',
    rgb: 'rgb(192, 12, 12)',
    hsl: 'hsl(0, 88%, 40%)',
    fontColor: color.white,
  },
].map(color => {
  const {rgb, hsl} = parseColor(color.hex);
  const {chroma, luminance} = colorAnalyzer(color.hex);
  color = {
    ...color,
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    h: hsl[0],
    s: hsl[1],
    l: hsl[2],
    chroma: chroma,
    luminance: luminance,
  };
  return color;
});

describe('Color picker functions:', () => {
  it('Clicking the neutral color does not change the hue of the color triangle', () => {
    const {canvasWidth, squareTopLeftX, squareTopLeftY} = getCanvasMetrics(5);
    cy.viewport(canvasWidth, canvasWidth);

    cy.visit('/');
    cy.findByLabelText(/color code/i).type(twitterBlue.rgb);

    cy.findByTestId('reticle').click(squareTopLeftX, squareTopLeftY + 100);
    cy.findByTestId('color-triangle')
      .should('be.visible')
      .matchImageSnapshot('twitterBlue');
  });
});
