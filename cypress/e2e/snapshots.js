const twitterBlue = 'rgb(29, 161, 242)';
const mcdonaldsRed = 'rgb(191, 12, 12)';
const grey = 'rgb(129, 129, 129)';
const white = 'rgb(255, 255, 255)';

it.only('Entire UI is correctly shown', () => {
  cy.viewport('iphone-5'); // 320 x 568 (see https://docs.cypress.io/api/commands/viewport.html#Arguments)
  cy.visit('/');
  cy.findByLabelText(/color code/i).type(twitterBlue);
  cy.matchImageSnapshot('entire-ui');
});

describe('Entering css color code shows the color triangle diagram', () => {
  it('for Twitter blue and then for McDonalds red', () => {
    cy.visit('/');

    cy.findByLabelText(/color code/i).type(twitterBlue);
    cy.get('canvas').should('be.visible').matchImageSnapshot('twitterBlue');

    cy.findByLabelText(/color code/i)
      .clear()
      .type(mcdonaldsRed);
    cy.get('canvas').should('be.visible').matchImageSnapshot('mcdonaldsRed');
  });

  it('for neutral color', () => {
    cy.visit('/');

    cy.findByLabelText(/color code/i).type(grey);
    cy.get('canvas').should('be.visible').matchImageSnapshot('grey');

    cy.findByLabelText(/color code/i)
      .clear()
      .type(white);
    cy.get('canvas').should('be.visible').matchImageSnapshot('white');
  });
});
