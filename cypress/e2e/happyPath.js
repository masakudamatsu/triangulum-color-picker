import {color} from 'src/utils/color';

describe('Entering css color code shows its color, its Hex code equivalent in a legible way', () => {
  it('for RGB code', () => {
    const twitterBlue = 'rgb(29, 161, 242)';
    const mcdonaldsRed = 'rgb(191, 12, 12)';
    cy.visit('/');

    cy.findByLabelText(/color code/i).type(twitterBlue);

    cy.findByLabelText(/hex/i)
      .should('have.css', 'background-color', twitterBlue)
      .should('have.css', 'color', color.black)
      .should('have.value', '#1da1f2');
    cy.findByText(/hex/i, {selector: 'label'}).should(
      'have.css',
      'color',
      color.black,
    );

    cy.findByLabelText(/color code/i)
      .clear()
      .type(mcdonaldsRed);

    cy.findByLabelText(/hex/i)
      .should('have.css', 'background-color', mcdonaldsRed)
      .should('have.css', 'color', color.white)
      .should('have.value', '#bf0c0c');
    cy.findByText(/hex/i, {selector: 'label'}).should(
      'have.css',
      'color',
      color.white,
    );
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
