import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

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
  color = {
    ...color,
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    h: hsl[0],
    s: hsl[1],
    l: hsl[2],
  };
  return color;
});

describe('Entering css color code shows (1) its color, (2) its Hex code equivalent, (3) RGB values, (4) HSL values, all in a (5) legible way', () => {
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
    });
  });
});

describe('Entering css color code shows the color triangle diagram', () => {
  it('for Twitter blue and then for McDonalds red', () => {
    const twitterBlue = 'rgb(29, 161, 242)';
    const mcdonaldsRed = 'rgb(191, 12, 12)';
    cy.visit('/');

    cy.findByLabelText(/color code/i).type(twitterBlue);
    cy.get('canvas').should('be.visible').matchImageSnapshot('twitterBlue');

    cy.findByLabelText(/color code/i)
      .clear()
      .type(mcdonaldsRed);
    cy.get('canvas').should('be.visible').matchImageSnapshot('mcdonaldsRed');
  });

  it('for neutral color', () => {
    const grey = 'rgb(129, 129, 129)';
    const white = 'rgb(255, 255, 255)';
    cy.visit('/');

    cy.findByLabelText(/color code/i).type(grey);
    cy.get('canvas').should('be.visible').matchImageSnapshot('grey');

    cy.findByLabelText(/color code/i)
      .clear()
      .type(white);
    cy.get('canvas').should('be.visible').matchImageSnapshot('white');
  });
});

describe('Entering hex code shows its color, the hex code in a legible way, RGB and HSL values, and its css code in the text field', () => {
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
    });
  });
});
