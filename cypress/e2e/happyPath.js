import {color} from 'src/utils/color';

describe('Entering css color code shows (1) its color, (2) its Hex code equivalent, (3) RGB values, (4) HSL values, all in a (5) legible way', () => {
  const twitterBlue = {
    // an example of high-luminance color
    hex: '#1ca0f2',
    rgb: 'rgb(28, 160, 242)',
    hsl: 'hsl(203, 89%, 53%)',
  };
  const mcdonaldsRed = {
    // an example of low-luminance color
    hex: '#c00c0c',
    rgb: 'rgb(192, 12, 12)',
    hsl: 'hsl(0, 88%, 40%)',
  };
  ['hex', 'rgb', 'hsl'].forEach(colorcode => {
    it(`for ${colorcode}`, () => {
      cy.visit('/');
      cy.findByLabelText(/color code/i).type(twitterBlue[colorcode]);

      cy.findByLabelText(/hex/i)
        .should('have.css', 'background-color', twitterBlue.rgb) // (1)
        .should('have.value', twitterBlue.hex) // (2)
        .should('have.css', 'color', color.black); // (5)
      cy.findByText(/hex/i, {selector: 'label'}).should(
        'have.css',
        'color',
        color.black, // (5)
      );

      cy.findByLabelText(/color code/i)
        .clear()
        .type(mcdonaldsRed[colorcode]);

      cy.findByLabelText(/hex/i)
        .should('have.css', 'background-color', mcdonaldsRed.rgb) // (1)
        .should('have.value', mcdonaldsRed.hex) // (2)
        .should('have.css', 'color', color.white); // (5)
      cy.findByText(/hex/i, {selector: 'label'}).should(
        'have.css',
        'color',
        color.white, // (5)
      );
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

describe('Entering hex code shows its color, the hex code in a legible way, and its css code in the text field', () => {
  it('twitter blue', () => {
    const twitterBlue = {
      hex: '#1da1f2',
      rgb: 'rgb(29, 161, 242)',
    };
    cy.visit('/');

    cy.findByLabelText(/hex/i).clear().type(twitterBlue.hex);

    cy.findByLabelText(/hex/i)
      .should('have.css', 'background-color', twitterBlue.rgb)
      .should('have.css', 'color', color.black);
    cy.findByLabelText(/color code/i).should('have.value', twitterBlue.hex);
    cy.findByText(/hex/i, {selector: 'label'}).should(
      'have.css',
      'color',
      color.black,
    );
  });
  it('McDonalds Red', () => {
    const mcdonaldsRed = {
      hex: '#bf0c0c',
      rgb: 'rgb(191, 12, 12)',
    };
    cy.visit('/');

    cy.findByLabelText(/hex/i).clear().type(mcdonaldsRed.hex);

    cy.findByLabelText(/hex/i)
      .should('have.css', 'background-color', mcdonaldsRed.rgb)
      .should('have.css', 'color', color.white);
    cy.findByLabelText(/color code/i).should('have.value', mcdonaldsRed.hex);
    cy.findByText(/hex/i, {selector: 'label'}).should(
      'have.css',
      'color',
      color.white,
    );
  });
});
