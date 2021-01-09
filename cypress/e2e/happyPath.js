import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

import colorAnalyzer from 'src/utils/colorAnalyzer';
import {color} from 'src/utils/color';

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

describe('Entering css color code shows (1) its color, (2) its Hex code equivalent, (3) RGB values, (4) HSL values, all in a (5) legible way, and (6) chroma and luminance', () => {
  // test
  ['hex', 'rgb', 'hsl'].forEach(colorcode => {
    it(`for ${colorcode}`, () => {
      cy.visit('/');
      cy.findByLabelText(/color code/i).type(twitterBlue[colorcode]);

      cy.findByLabelText(/hex/i)
        .should('have.css', 'background-color', twitterBlue.rgb) // (1)
        .should('have.value', twitterBlue.hex) // (2)
        .should('have.css', 'color', twitterBlue.fontColor); // (5)
      cy.findByText(/hex/i, {selector: 'label'}).should(
        'have.css',
        'color',
        twitterBlue.fontColor, // (5)
      );

      cy.findByLabelText(/^r$/i).should('have.value', twitterBlue.r); // (3)
      cy.findByLabelText(/^g$/i).should('have.value', twitterBlue.g);
      cy.findByLabelText(/^b$/i).should('have.value', twitterBlue.b);

      cy.findByLabelText(/^h$/i).should('have.value', twitterBlue.h); // (4)
      cy.findByLabelText(/^s$/i).should('have.value', twitterBlue.s);
      cy.findByLabelText(/^l$/i).should('have.value', twitterBlue.l);

      cy.findByLabelText(/^chroma$/i).should('have.value', twitterBlue.chroma);
      cy.findByLabelText(/^luminance$/i).should(
        'have.value',
        twitterBlue.luminance,
      );

      cy.findByLabelText(/color code/i)
        .clear()
        .type(mcdonaldsRed[colorcode]);

      cy.findByLabelText(/hex/i)
        .should('have.css', 'background-color', mcdonaldsRed.rgb) // (1)
        .should('have.value', mcdonaldsRed.hex) // (2)
        .should('have.css', 'color', mcdonaldsRed.fontColor); // (5)
      cy.findByText(/hex/i, {selector: 'label'}).should(
        'have.css',
        'color',
        mcdonaldsRed.fontColor, // (5)
      );

      cy.findByLabelText(/^r$/i).should('have.value', mcdonaldsRed.r); // (3)
      cy.findByLabelText(/^g$/i).should('have.value', mcdonaldsRed.g);
      cy.findByLabelText(/^b$/i).should('have.value', mcdonaldsRed.b);

      cy.findByLabelText(/^h$/i).should('have.value', mcdonaldsRed.h); // (4)
      cy.findByLabelText(/^s$/i).should('have.value', mcdonaldsRed.s);
      cy.findByLabelText(/^l$/i).should('have.value', mcdonaldsRed.l);

      cy.findByLabelText(/^chroma$/i).should('have.value', mcdonaldsRed.chroma);
      cy.findByLabelText(/^luminance$/i).should(
        'have.value',
        mcdonaldsRed.luminance,
      );
    });
  });
});

describe('Entering hex code shows its color, the hex code in a legible way, RGB and HSL values, its css code in the text field, and chroma and luminance', () => {
  [twitterBlue, mcdonaldsRed].forEach(userColor => {
    it(`${userColor.label}`, () => {
      cy.visit('/');
      cy.findByLabelText(/hex/i).clear().type(userColor.hex);

      cy.findByLabelText(/hex/i)
        .should('have.css', 'background-color', userColor.rgb)
        .should('have.css', 'color', userColor.fontColor);
      cy.findByLabelText(/color code/i).should('have.value', userColor.hex);
      cy.findByText(/hex/i, {selector: 'label'}).should(
        'have.css',
        'color',
        userColor.fontColor,
      );

      cy.findByLabelText(/^r$/i).should('have.value', userColor.r);
      cy.findByLabelText(/^g$/i).should('have.value', userColor.g);
      cy.findByLabelText(/^b$/i).should('have.value', userColor.b);

      cy.findByLabelText(/^h$/i).should('have.value', userColor.h);
      cy.findByLabelText(/^s$/i).should('have.value', userColor.s);
      cy.findByLabelText(/^l$/i).should('have.value', userColor.l);

      cy.findByLabelText(/^chroma$/i).should('have.value', userColor.chroma);
      cy.findByLabelText(/^luminance$/i).should(
        'have.value',
        userColor.luminance,
      );
    });
  });
});

describe('Entering rgb values shows its color, the hex code in a legible way, RGB and HSL values, and its css code in the text field', () => {
  [twitterBlue, mcdonaldsRed].forEach(userColor => {
    it(`${userColor.label}`, () => {
      cy.visit('/');
      cy.findByLabelText(/^r$/i).clear().type(userColor.r);
      cy.findByLabelText(/^g$/i).clear().type(userColor.g);
      cy.findByLabelText(/^b$/i).clear().type(userColor.b);

      cy.findByLabelText(/color code/i).should('have.value', userColor.rgb);
      cy.findByLabelText(/hex/i)
        .should('have.value', userColor.hex)
        .should('have.css', 'background-color', userColor.rgb)
        .should('have.css', 'color', userColor.fontColor);
      cy.findByText(/hex/i, {selector: 'label'}).should(
        'have.css',
        'color',
        userColor.fontColor,
      );

      cy.findByLabelText(/^h$/i).should('have.value', userColor.h);
      cy.findByLabelText(/^s$/i).should('have.value', userColor.s);
      cy.findByLabelText(/^l$/i).should('have.value', userColor.l);

      cy.findByLabelText(/^chroma$/i).should('have.value', userColor.chroma);
      cy.findByLabelText(/^luminance$/i).should(
        'have.value',
        userColor.luminance,
      );
    });
  });
});

describe('Entering HSL values shows its color, the hex code in a legible way, RGB and HSL values, and its css code in the text field', () => {
  [twitterBlue, mcdonaldsRed].forEach(userColor => {
    it(`${userColor.label}`, () => {
      cy.visit('/');
      cy.findByLabelText(/^h$/i).clear().type(userColor.h);
      cy.findByLabelText(/^s$/i).clear().type(userColor.s);
      cy.findByLabelText(/^l$/i).clear().type(userColor.l);

      cy.findByLabelText(/color code/i).should('have.value', userColor.hsl);
      cy.findByLabelText(/hex/i)
        .should('have.value', userColor.hex)
        .should('have.css', 'background-color', userColor.rgb)
        .should('have.css', 'color', userColor.fontColor);
      cy.findByText(/hex/i, {selector: 'label'}).should(
        'have.css',
        'color',
        userColor.fontColor,
      );

      cy.findByLabelText(/^r$/i).should('have.value', userColor.r);
      cy.findByLabelText(/^g$/i).should('have.value', userColor.g);
      cy.findByLabelText(/^b$/i).should('have.value', userColor.b);

      cy.findByLabelText(/^chroma$/i).should('have.value', userColor.chroma);
      cy.findByLabelText(/^luminance$/i).should(
        'have.value',
        userColor.luminance,
      );
    });
  });
});

describe('Color picker functions:', () => {
  it('Clicking the color triangle updates the user-selected color with all the information shown', () => {
    cy.visit('/');
    cy.findByLabelText(/color code/i).type(twitterBlue.rgb);

    cy.findByTestId('color-triangle').click(330, 333);

    cy.findByLabelText(/color code/i).should(
      'have.value',
      'rgb(134, 204, 247)',
    );
    cy.findByLabelText(/hex/i).should('have.value', '#86ccf7');

    cy.findByLabelText(/^r$/i).should('have.value', '134');
    cy.findByLabelText(/^g$/i).should('have.value', '204');
    cy.findByLabelText(/^b$/i).should('have.value', '247');

    cy.findByLabelText(/^h$/i).should('have.value', '203');
    cy.findByLabelText(/^s$/i).should('have.value', '88');
    cy.findByLabelText(/^l$/i).should('have.value', '75');

    cy.findByLabelText(/^chroma$/i).should('have.value', '44.31');
    cy.findByLabelText(/^luminance$/i).should('have.value', '11.99');
  });
});
